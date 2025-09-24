import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database with sample data...')

  // Seed testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      position: 'CTO',
      rating: 5,
      content: 'Servifitech transformed our customer service with their AI chatbot solution. Response times decreased by 80% and customer satisfaction increased dramatically.',
      featured: true,
      approved: true
    },
    {
      name: 'Michael Chen',
      company: 'RetailMax',
      position: 'CEO', 
      rating: 5,
      content: 'The AI-powered analytics dashboard they built gives us insights we never had before. Our revenue grew 30% in just 6 months.',
      featured: true,
      approved: true
    },
    {
      name: 'Dr. Emily Rodriguez',
      company: 'MedTech Solutions',
      position: 'Director of Innovation',
      rating: 5,
      content: 'Their healthcare AI system streamlined our diagnostic processes. The team\'s expertise in both AI and healthcare is unmatched.',
      featured: true,
      approved: true
    },
    {
      name: 'James Wilson',
      company: 'FinanceFlow',
      position: 'VP of Technology',
      rating: 5,
      content: 'Servifitech delivered a fraud detection system that saved us millions. Their AI solutions are enterprise-grade and reliable.',
      featured: false,
      approved: true
    },
    {
      name: 'Lisa Thompson',
      company: 'EduTech Global',
      position: 'Head of Product',
      rating: 5,
      content: 'The personalized learning AI they developed increased student engagement by 200%. Exceptional work!',
      featured: false,
      approved: true
    },
    {
      name: 'David Park',
      company: 'LogisticsPro',
      position: 'Operations Manager',
      rating: 5,
      content: 'Their supply chain optimization AI reduced our costs by 25% while improving delivery times. Outstanding results.',
      featured: false,
      approved: true
    }
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: `testimonial-${testimonial.company.toLowerCase().replace(/\s+/g, '-')}` },
      update: testimonial,
      create: {
        id: `testimonial-${testimonial.company.toLowerCase().replace(/\s+/g, '-')}`,
        ...testimonial
      }
    })
  }

  // Seed services
  const services = [
    {
      title: 'Web Development',
      slug: 'web-development',
      description: 'Developing AI-optimized, responsive websites that integrate intelligent features for personalized user experiences.',
      content: 'Our web development services combine cutting-edge AI technologies with modern web frameworks to create exceptional digital experiences.',
      icon: 'Globe',
      color: 'from-blue-600 to-blue-400',
      features: '["Responsive Design", "AI Integration", "Performance Optimization", "SEO Friendly"]',
      price: 'Starting from $5,000',
      duration: '4-8 weeks',
      active: true,
      featured: true,
      order: 1
    },
    {
      title: 'Mobile App Development',
      slug: 'mobile-app-development', 
      description: 'Creating AI-enhanced mobile apps for iOS and Android that deliver intuitive user interactions and smart functionalities.',
      content: 'Native and cross-platform mobile applications with integrated AI capabilities for enhanced user engagement.',
      icon: 'Smartphone',
      color: 'from-purple-600 to-purple-400',
      features: '["Native Development", "Cross-Platform", "AI Features", "App Store Optimization"]',
      price: 'Starting from $8,000',
      duration: '6-12 weeks',
      active: true,
      featured: true,
      order: 2
    },
    {
      title: 'AI Agent Development',
      slug: 'ai-agent-development',
      description: 'Designing robust AI agents leveraging NLP, deep learning, and machine learning for real-time communication and automated support.',
      content: 'Custom AI agents built with advanced machine learning algorithms for intelligent automation and decision-making.',
      icon: 'Bot',
      color: 'from-green-600 to-green-400',
      features: '["Natural Language Processing", "Machine Learning", "Real-time Processing", "Custom Training"]',
      price: 'Starting from $12,000',
      duration: '8-16 weeks',
      active: true,
      featured: true,
      order: 3
    },
    {
      title: 'Chatbot Solutions',
      slug: 'chatbot-solutions',
      description: 'Deploying AI-powered chatbots that provide instant, intelligent customer interactions and drive engagement.',
      content: 'Smart chatbots with natural conversation capabilities, integrated with your business systems.',
      icon: 'MessageSquare',
      color: 'from-yellow-600 to-yellow-400',
      features: '["Multi-language Support", "Integration APIs", "Analytics Dashboard", "24/7 Availability"]',
      price: 'Starting from $3,000',
      duration: '2-6 weeks', 
      active: true,
      featured: false,
      order: 4
    },
    {
      title: 'NFC & RFID Integration',
      slug: 'nfc-rfid-integration',
      description: 'Integrating smart NFC and RFID technologies with AI-driven analytics for secure transactions and actionable insights.',
      content: 'IoT solutions combining NFC/RFID hardware with intelligent software for business automation.',
      icon: 'Wifi',
      color: 'from-red-600 to-red-400',
      features: '["Hardware Integration", "Secure Transactions", "Analytics", "Custom Hardware"]',
      price: 'Starting from $6,000',
      duration: '4-10 weeks',
      active: true,
      featured: false,
      order: 5
    },
    {
      title: 'Data Insights & Analytics',
      slug: 'data-analytics',
      description: 'Utilizing advanced machine learning algorithms to transform complex data into strategic business intelligence.',
      content: 'Comprehensive data analysis and visualization platforms powered by AI for actionable business insights.',
      icon: 'BarChart3',
      color: 'from-indigo-600 to-indigo-400',
      features: '["Data Visualization", "Predictive Analytics", "Custom Dashboards", "Real-time Insights"]',
      price: 'Starting from $7,000',
      duration: '6-12 weeks',
      active: true,
      featured: false,
      order: 6
    }
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service
    })
  }

  // Seed case studies
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Recommendation System',
      slug: 'ai-ecommerce-recommendations',
      description: 'Increased sales by 40% with personalized product recommendations using machine learning.',
      content: 'Complete case study content here...',
      client: 'RetailMax',
      industry: 'E-commerce',
      technologies: '["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"]',
      projectUrl: 'https://example.com',
      featured: true,
      published: true
    },
    {
      title: 'Healthcare Diagnostic AI System',
      slug: 'healthcare-diagnostic-ai',
      description: 'Improved diagnostic accuracy by 35% using computer vision and deep learning.',
      content: 'Complete case study content here...',
      client: 'MedTech Solutions', 
      industry: 'Healthcare',
      technologies: '["Python", "PyTorch", "OpenCV", "Flask", "MongoDB"]',
      featured: true,
      published: true
    },
    {
      title: 'Financial Fraud Detection System',
      slug: 'fraud-detection-system',
      description: 'Prevented $2.5M in fraudulent transactions with real-time AI monitoring.',
      content: 'Complete case study content here...',
      client: 'FinanceFlow',
      industry: 'Finance', 
      technologies: '["Python", "Scikit-learn", "Apache Kafka", "Redis", "Docker"]',
      featured: true,
      published: true
    }
  ]

  for (const caseStudy of caseStudies) {
    await prisma.caseStudy.upsert({
      where: { slug: caseStudy.slug },
      update: caseStudy,
      create: caseStudy
    })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
