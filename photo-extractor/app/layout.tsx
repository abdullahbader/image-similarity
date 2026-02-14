import './globals.css'
import 'leaflet/dist/leaflet.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'PhotoAnalyzer Pro - Image Duplication Detection & Metadata Extraction',
  description: 'Professional photo analysis platform for detecting image duplicates, extracting metadata, verifying authenticity, and identifying fraud. Advanced AI-powered duplicate detection and GPS location mapping.',
  keywords: 'photo analysis, duplicate detection, image similarity, metadata extraction, EXIF data, fraud detection, GPS location, image verification',
  openGraph: {
    title: 'PhotoAnalyzer Pro - Image Duplication Detection & Metadata Extraction',
    description: 'Professional photo analysis platform for detecting image duplicates, extracting metadata, and verifying authenticity.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}



