import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aman Jaiswal | Terminal Portfolio',
  description: 'Interactive terminal-style portfolio showcasing Aman Jaiswal\'s skills, projects, and experience in web development, software engineering, and technology.',
  keywords: [
    'Aman Jaiswal',
    'Software Engineer',
    'Web Developer',
    'Terminal Portfolio',
    'Interactive Portfolio',
    'Next.js',
    'React',
    'TypeScript',
    'Full Stack Developer',
    'Developer Portfolio'
  ].join(', '),
  authors: [{ name: 'Aman Jaiswal', url: 'https://github.com/amanjaiswal7236' }],
  creator: 'Aman Jaiswal',
  publisher: 'Aman Jaiswal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amanjaiswal7236.vercel.app',
    title: 'Aman Jaiswal | Terminal Portfolio',
    description: 'Interactive terminal-style portfolio showcasing Aman Jaiswal\'s skills, projects, and experience in web development, software engineering, and technology.',
    siteName: 'Aman Jaiswal Portfolio',
    images: [{
      url: '/preview.png',
      width: 1200,
      height: 630,
      alt: 'Aman Jaiswal Terminal Portfolio Preview'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Jaiswal | Terminal Portfolio',
    description: 'Interactive terminal-style portfolio showcasing Aman Jaiswal\'s skills, projects, and experience in web development, software engineering, and technology.',
    creator: '@amanjaiswal7236',
    images: ['/preview.png'],
  },
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
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://amanjaiswal7236.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
