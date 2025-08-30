import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Servifitech',
  description: 'Created',
  generator: 'Servifitech.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
