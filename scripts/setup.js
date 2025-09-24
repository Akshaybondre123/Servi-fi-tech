#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Servifitech website...\n');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function step(message) {
  log(`\n📋 ${message}`, 'blue');
}

function success(message) {
  log(`✅ ${message}`, 'green');
}

function error(message) {
  log(`❌ ${message}`, 'red');
}

function warning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function runCommand(command, description) {
  try {
    log(`Running: ${command}`, 'yellow');
    execSync(command, { stdio: 'inherit' });
    success(`${description} completed`);
    return true;
  } catch (err) {
    error(`Failed: ${description}`);
    console.error(err.message);
    return false;
  }
}

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    success(`${description} exists`);
    return true;
  } else {
    error(`${description} not found`);
    return false;
  }
}

// Main setup process
async function setup() {
  step('Checking prerequisites');
  
  // Check Node.js version
  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    
    if (majorVersion >= 18) {
      success(`Node.js ${nodeVersion} ✓`);
    } else {
      error(`Node.js ${nodeVersion} - Please upgrade to Node.js 18+`);
      process.exit(1);
    }
  } catch (err) {
    error('Node.js not found. Please install Node.js 18+');
    process.exit(1);
  }

  // Check npm
  try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    success(`npm ${npmVersion} ✓`);
  } catch (err) {
    error('npm not found');
    process.exit(1);
  }

  step('Installing dependencies');
  if (!runCommand('npm install', 'Dependencies installation')) {
    process.exit(1);
  }

  step('Setting up environment');
  
  // Check if .env.local exists, if not copy from .env.example
  const envLocal = path.join(process.cwd(), '.env.local');
  const envExample = path.join(process.cwd(), '.env.example');
  
  if (!fs.existsSync(envLocal)) {
    if (fs.existsSync(envExample)) {
      fs.copyFileSync(envExample, envLocal);
      success('Created .env.local from .env.example');
      warning('Please update .env.local with your actual configuration');
    } else {
      warning('.env.example not found, please create .env.local manually');
    }
  } else {
    success('.env.local already exists');
  }

  step('Setting up database');
  
  if (!runCommand('npx prisma generate', 'Prisma client generation')) {
    process.exit(1);
  }
  
  if (!runCommand('npx prisma db push', 'Database schema push')) {
    process.exit(1);
  }

  step('Seeding database with sample data');
  
  // Check if tsx is installed, if not install it
  try {
    execSync('npx tsx --version', { stdio: 'ignore' });
  } catch (err) {
    log('Installing tsx for TypeScript execution...', 'yellow');
    runCommand('npm install -D tsx', 'tsx installation');
  }
  
  if (!runCommand('npx tsx lib/seed.ts', 'Database seeding')) {
    warning('Database seeding failed, but you can run it manually later');
  }

  step('Verifying setup');
  
  // Check key files
  checkFile('prisma/schema.prisma', 'Database schema');
  checkFile('app/api/contact/route.ts', 'Contact API');
  checkFile('components/sections/testimonials.tsx', 'Testimonials component');
  checkFile('.env.local', 'Environment variables');

  // Check database
  try {
    execSync('npx prisma db execute --command "SELECT name FROM sqlite_master WHERE type=\'table\';"', { stdio: 'ignore' });
    success('Database connection working');
  } catch (err) {
    warning('Database connection issue - please check your DATABASE_URL');
  }

  log('\n🎉 Setup completed successfully!', 'bold');
  log('\n📝 Next steps:', 'blue');
  log('1. Update .env.local with your email configuration (optional)');
  log('2. Run "npm run dev" to start the development server');
  log('3. Open http://localhost:3000 in your browser');
  log('4. Customize content in the database or seed file');
  
  log('\n📚 Useful commands:', 'blue');
  log('- npm run dev          # Start development server');
  log('- npm run build        # Build for production');
  log('- npm run db:studio    # Open database admin panel');
  log('- npm run db:seed      # Re-seed database');
  
  log('\n💡 Tips:', 'yellow');
  log('- Check README.md for detailed documentation');
  log('- Configure email settings for contact form functionality');
  log('- Use Prisma Studio to manage database content');
  log('- The testimonials section uses fallback data if database is empty');
  
  log('\n🚀 Ready to launch your professional website!', 'green');
}

// Run setup
setup().catch((err) => {
  error('Setup failed');
  console.error(err);
  process.exit(1);
});
