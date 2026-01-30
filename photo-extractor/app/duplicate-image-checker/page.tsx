import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Duplicate Image Checker Tool — Find Similar Images or Duplicates | PhotoAnalyzer',
  description: 'Free duplicate image checker tool to find similar images or duplicates in your photo collection. Upload images to detect duplicates, prevent repeated photo uploads, and identify similar photos instantly.',
  keywords: 'duplicate image checker, find similar images, detect duplicate images, find duplicate photos, similar image detection, duplicate photo finder, image comparison tool',
  openGraph: {
    title: 'Duplicate Image Checker Tool — Find Similar Images',
    description: 'Free duplicate image checker tool to find similar images or duplicates in your photo collection.',
    type: 'website',
    url: 'https://photoanalyser.com/duplicate-image-checker',
  },
  alternates: {
    canonical: 'https://photoanalyser.com/duplicate-image-checker',
  },
}

export default function DuplicateImageCheckerPage() {
  return (
    <main style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: 'clamp(24px, 4vw, 48px)',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      minHeight: 'calc(100vh - 40px)',
    }}>
      <div style={{ marginBottom: '32px' }}>
        <Link href="/" style={{
          color: '#008571',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: '500',
          display: 'inline-block',
          marginBottom: '24px'
        }}>
          ← Back to Home
        </Link>
        
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(16px, 3vw, 24px)',
          lineHeight: '1.3'
        }}>
          Duplicate Image Checker Tool — Find Similar Images or Duplicates
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#4D4D4D',
          lineHeight: '1.7',
          marginBottom: '32px'
        }}>
          Our free duplicate image checker tool helps you find similar images or duplicates in your photo collection. 
          Upload multiple images to instantly detect duplicates, prevent repeated photo uploads, and identify similar 
          photos even after editing, compression, or format conversion.
        </p>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
        padding: 'clamp(24px, 4vw, 40px)',
        borderRadius: '20px',
        marginBottom: '32px',
        border: '1px solid rgba(0, 133, 113, 0.2)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(20px, 3vw, 24px)'
        }}>
          How to Use Our Duplicate Image Checker
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>1️⃣</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Upload Images
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Upload single images, multiple files, or entire folders. Supports JPG, PNG, TIFF, BMP, and HEIC formats.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>2️⃣</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Automatic Detection
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Our advanced perceptual hashing algorithms automatically detect duplicate and similar images, 
              even after editing or compression.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>3️⃣</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              View Results
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Review detected duplicates, filter results, and export to Excel for further analysis or reporting.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        background: '#FFFFFF',
        padding: 'clamp(24px, 4vw, 40px)',
        borderRadius: '20px',
        border: '1px solid rgba(0, 133, 113, 0.1)',
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(20px, 3vw, 24px)'
        }}>
          Key Features of Our Duplicate Image Checker
        </h2>
        
        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gap: '16px'
        }}>
          {[
            'Detect duplicate images even after editing, resizing, or format conversion',
            'Find similar images using advanced perceptual hashing algorithms',
            'Prevent repeated photo uploads in surveys, forms, or submissions',
            'Batch process hundreds or thousands of images simultaneously',
            'Works with images from any source (social media, cameras, downloads)',
            '100% local processing — your images never leave your device',
            'Export results to Excel for further analysis',
            'No file size limits or account required'
          ].map((feature, index) => (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '12px',
              background: 'rgba(0, 133, 113, 0.03)',
              borderRadius: '8px'
            }}>
              <span style={{ color: '#008571', fontWeight: '600', fontSize: '1.2rem' }}>✓</span>
              <span style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.1) 0%, rgba(30, 80, 80, 0.1) 100%)',
        padding: 'clamp(24px, 4vw, 40px)',
        borderRadius: '20px',
        textAlign: 'center',
        border: '2px solid rgba(0, 133, 113, 0.3)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: '16px'
        }}>
          Ready to Find Duplicate Images?
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
          color: '#4D4D4D',
          marginBottom: '24px'
        }}>
          Start using our duplicate image checker tool now — it's free and works entirely in your browser.
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px)',
          background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
          color: '#FFFFFF',
          textDecoration: 'none',
          borderRadius: '12px',
          fontWeight: '600',
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 4px 12px rgba(0, 133, 113, 0.4)'
        }}>
          Try Duplicate Image Checker Now →
        </Link>
      </div>
    </main>
  )
}
