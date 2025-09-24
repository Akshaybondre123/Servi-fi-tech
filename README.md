# 🚀 Servifitech - AI-Powered Digital Solutions

A professional Next.js 15 website with TypeScript, Tailwind CSS, 3D animations, and a complete backend system for AI services company.

## ✨ Features

### Frontend
- 🎨 **Modern Design** - Professional UI with 3D animations using Three.js and Framer Motion
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🌙 **Dark/Light Mode** - Theme switching with next-themes
- ⚡ **Performance** - Optimized with Next.js 15 and React 19
- 🎭 **Animations** - Smooth transitions and interactive elements
- 📊 **Components** - Professional UI components with Radix UI

### Backend & Database
- 🗄️ **Database** - SQLite for development, PostgreSQL ready for production
- 🔒 **Authentication** - JWT-based authentication system
- 📧 **Email** - Automated contact form emails with Nodemailer
- 📝 **Content Management** - Dynamic testimonials, services, and case studies
- 📊 **Analytics** - Built-in analytics tracking
- 🛡️ **Security** - Input validation, rate limiting, and secure headers

### Professional Sections
- 🏠 **Hero** - Interactive 3D hero section
- 💼 **Services** - Dynamic services with pricing and features
- 👥 **Testimonials** - Client reviews with ratings and carousel
- 📈 **Case Studies** - Project showcases with results
- 📞 **Contact** - Professional contact form with multiple fields
- 🏭 **Industries** - Industry-specific solutions carousel
- 📊 **Analytics** - Real-time contact and engagement tracking

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion + Three.js for 3D effects
- **Forms**: React Hook Form with Yup validation
- **Icons**: Lucide React

### Backend
- **Database**: Prisma ORM with SQLite (dev) / PostgreSQL (prod)
- **Authentication**: JWT with jose
- **Email**: Nodemailer for SMTP
- **Validation**: Yup schema validation
- **Security**: bcryptjs for password hashing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Servi-fi-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and configure:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"
   
   # Email (optional - for contact form)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   ADMIN_EMAIL="admin@servifitech.com"
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   NEXT_PUBLIC_SITE_NAME="Servifitech"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Create and migrate database
   npm run db:push
   
   # Seed with sample data
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Servi-fi-tech/
├── app/                    # Next.js 15 app directory
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   ├── testimonials/  # Testimonials API
│   │   └── services/      # Services API
│   ├── buy-now/          # Purchase page
│   ├── portfolio/        # Portfolio page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── 3d/              # Three.js components
│   ├── sections/        # Page sections
│   ├── ui/              # UI components
│   └── ...
├── lib/                 # Utilities
│   ├── database.ts      # Prisma client
│   ├── seed.ts          # Database seeding
│   └── utils.ts         # Helper functions
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
├── public/              # Static assets
└── styles/              # Additional styles
```

## 🗄️ Database Schema

The application includes the following models:

### Contact
- Contact form submissions with status tracking
- Fields: name, email, phone, company, subject, message
- Status management (NEW, IN_PROGRESS, COMPLETED, CLOSED)

### Testimonial
- Client testimonials with ratings
- Approval system for content moderation
- Featured testimonials support

### Service
- Dynamic services with pricing and features
- Content management with rich descriptions
- Order and featured service support

### CaseStudy
- Project showcases with client information
- Technology stack tracking
- Featured case studies

### BlogPost
- Blog content management
- Author and tag support
- Publishing workflow

### Analytics
- Event tracking for user interactions
- Page views and form submissions
- User agent and IP logging

## 📧 Email Configuration

To enable contact form emails, configure SMTP settings:

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an app password: https://support.google.com/accounts/answer/185833
3. Update `.env.local`:
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-16-digit-app-password"
   ```

### Other Providers
- **Outlook**: `smtp-mail.outlook.com`, port 587
- **Yahoo**: `smtp.mail.yahoo.com`, port 587
- **Custom SMTP**: Use your provider's settings

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Fork this repository to your GitHub
   - Connect to Vercel: https://vercel.com

2. **Environment Variables**
   Add these in Vercel dashboard:
   ```env
   DATABASE_URL="postgresql://..."  # Use PostgreSQL for production
   SMTP_HOST="your-smtp-host"
   SMTP_PORT="587"
   SMTP_USER="your-email@domain.com"
   SMTP_PASS="your-password"
   ADMIN_EMAIL="admin@yourdomain.com"
   JWT_SECRET="your-secure-random-string"
   NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
   ```

3. **Database Setup**
   ```bash
   # After deployment, run these commands:
   npx prisma migrate deploy
   npx prisma db seed
   ```

### Other Platforms

- **Netlify**: Use `npm run build` and deploy `out/` folder
- **Railway**: Connect GitHub repo, add environment variables
- **DigitalOcean App Platform**: Use the app spec configuration

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema to database
npm run db:studio       # Open Prisma Studio
npm run db:migrate      # Create migration
npm run db:seed         # Seed database with sample data
```

### Adding New Features

1. **New API Endpoint**
   - Create file in `app/api/[endpoint]/route.ts`
   - Add database operations with Prisma
   - Include proper validation and error handling

2. **New Component**
   - Add to appropriate folder in `components/`
   - Follow existing patterns for animations and styling
   - Include TypeScript interfaces

3. **Database Changes**
   - Update `prisma/schema.prisma`
   - Run `npm run db:push` for development
   - Create migration for production: `npm run db:migrate`

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    }
  }
}
```

### Content
- **Services**: Update in database or `lib/seed.ts`
- **Testimonials**: Add via API or database directly
- **Contact Info**: Update in `components/sections/contact.tsx`
- **Company Info**: Update in `app/layout.tsx` metadata

### Styling
- **Global Styles**: `app/globals.css`
- **Components**: Individual component files
- **Animations**: Framer Motion variants in components

## 📊 Analytics & SEO

### Built-in Analytics
- Contact form submissions tracking
- Page view logging
- User interaction events

### SEO Optimizations
- Server-side rendering with Next.js
- Meta tags and Open Graph
- Structured data markup
- Sitemap generation
- Performance optimizations

### Google Analytics
Add your GA4 tracking ID to `.env.local`:
```env
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

## 🛡️ Security

### Implemented Security Features
- Input validation with Yup schemas
- XSS protection with sanitization
- CSRF protection with SameSite cookies
- Rate limiting on API endpoints
- Secure headers configuration

### Production Security Checklist
- [ ] Use strong JWT secrets
- [ ] Enable HTTPS only
- [ ] Configure proper CORS
- [ ] Use environment variables for secrets
- [ ] Regular dependency updates
- [ ] Database backup strategy

## 🐛 Troubleshooting

### Common Issues

**Database Connection**
```bash
# Reset database
rm prisma/dev.db
npm run db:push
npm run db:seed
```

**Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**3D Components Not Loading**
- Check WebGL support in browser
- Fallback components are included for compatibility

### Getting Help

1. Check the [Issues](../../issues) page
2. Review [Next.js Documentation](https://nextjs.org/docs)
3. Check [Prisma Documentation](https://www.prisma.io/docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D library
- [Prisma](https://www.prisma.io/) - Database toolkit
- [Radix UI](https://www.radix-ui.com/) - UI components

---

**🚀 Ready to transform your digital presence? [Get in touch!](https://servifitech.com/contact)**
