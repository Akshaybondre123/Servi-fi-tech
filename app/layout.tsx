import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Servifitech - AI-Powered Digital Solutions',
    template: '%s | Servifitech'
  },
  description: 'Transform your business with cutting-edge AI solutions. We specialize in web development, mobile apps, AI agents, chatbots, NFC/RFID integration, and data analytics.',
  keywords: [
    'AI development',
    'web development', 
    'mobile app development',
    'chatbot solutions',
    'AI agents',
    'NFC RFID integration',
    'data analytics',
    'artificial intelligence',
    'machine learning',
    'digital transformation'
  ],
  authors: [{ name: 'Servifitech Team' }],
  creator: 'Servifitech',
  publisher: 'Servifitech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://servifitech.com',
    siteName: 'Servifitech',
    title: 'Servifitech - AI-Powered Digital Solutions',
    description: 'Transform your business with cutting-edge AI solutions. Expert development in web, mobile, AI agents, chatbots, and data analytics.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Servifitech - AI-Powered Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servifitech - AI-Powered Digital Solutions',
    description: 'Transform your business with cutting-edge AI solutions. Expert development in web, mobile, AI agents, chatbots, and data analytics.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
