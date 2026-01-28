'use client'

import Link from 'next/link'

const faqs = [
  {
    q: 'Does duplicate detection work with images from social media?',
    a: 'Yes! Duplicate detection works with any image source, including social media downloads, screenshots, edited photos, or compressed files. The algorithm analyzes visual content, not metadata, so it works regardless of where the image came from.'
  },
  {
    q: 'Why can\'t I extract GPS data from social media images?',
    a: 'Social media platforms (Facebook, Instagram, Twitter, WhatsApp, etc.) remove GPS location data from images when they\'re uploaded for privacy reasons. GPS extraction only works with original photos taken directly from cameras or devices with location services enabled.'
  },
  {
    q: 'What image formats are supported?',
    a: 'We support JPG/JPEG, PNG, TIFF, BMP, and HEIC formats. You can upload single files, multiple files, or entire folders with recursive directory support.'
  },
  {
    q: 'Is my data secure and private?',
    a: 'Absolutely! All image processing happens locally in your browser. Your images never leave your device and are never uploaded to any server. This ensures complete privacy and data security.'
  },
  {
    q: 'How accurate is the duplicate detection?',
    a: 'Our advanced perceptual hashing algorithms can detect duplicates even after editing, resizing, compression, or format conversion. The system identifies images that are visually similar, not just exact matches.'
  },
  {
    q: 'Can I process large batches of images?',
    a: 'Yes! The platform supports batch processing of hundreds or thousands of images. Upload entire folders with recursive directory support for efficient bulk analysis. Processing speed depends on your device, but typically handles 100 images in 30-60 seconds.'
  },
  {
    q: 'What metadata can be extracted?',
    a: 'We extract comprehensive metadata including timestamps, GPS coordinates, camera make/model, device information, file size, dimensions, and technical specifications. The exact data available depends on what was stored in the original image file.'
  },
  {
    q: 'Do I need to install anything?',
    a: 'No installation required! PhotoAnalyzer Pro runs entirely in your web browser. Just visit the website and start uploading images. Works on Windows, Mac, Linux, and mobile devices.'
  },
  {
    q: 'What browsers are supported?',
    a: 'PhotoAnalyzer Pro works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. For the best experience, we recommend using the latest version of Chrome or Firefox.'
  },
  {
    q: 'Is there a file size limit?',
    a: 'No, there is no file size limit. However, very large images may take longer to process. The processing happens entirely in your browser, so performance depends on your device\'s capabilities.'
  },
  {
    q: 'Can I export my results?',
    a: 'Yes! You can export all filtered results to Excel format with all metadata included. Simply click the "Export to Excel" button in the data table.'
  },
  {
    q: 'How does the GPS location mapping work?',
    a: 'If your images contain GPS coordinates in their metadata, PhotoAnalyzer Pro will display them on an interactive map. You can click on markers to see image details and view the location where each photo was taken.'
  }
]

export default function FAQPage() {
  return (
    <main style={{
      maxWidth: '1400px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)',
      padding: 'clamp(24px, 4vw, 48px)',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Frequently Asked Questions
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          color: '#4D4D4D',
          textAlign: 'center',
          marginBottom: 'clamp(32px, 6vw, 48px)',
          lineHeight: '1.7'
        }}>
          Find answers to common questions about PhotoAnalyzer Pro. Can&apos;t find what you&apos;re looking for?{' '}
          <Link href="/contact" style={{
            color: '#008571',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Contact us
          </Link>.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px, 3vw, 20px)'
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
                padding: 'clamp(20px, 3vw, 28px)',
                borderRadius: '16px',
                border: '1px solid rgba(0, 133, 113, 0.2)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                color: '#008571',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>❓</span>
                <span>{faq.q}</span>
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                color: '#4D4D4D',
                lineHeight: '1.7',
                marginLeft: '40px'
              }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 'clamp(32px, 6vw, 48px)',
          padding: 'clamp(20px, 3vw, 28px)',
          background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.1) 0%, rgba(30, 80, 80, 0.1) 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(0, 133, 113, 0.2)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#4D4D4D',
            marginBottom: '16px'
          }}>
            Still have questions?
          </p>
          <Link 
            href="/contact"
            style={{
              display: 'inline-block',
              padding: 'clamp(12px, 2.5vw, 16px) clamp(24px, 4vw, 32px)',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              fontWeight: '600',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
              border: 'none',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(0, 133, 113, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 133, 113, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 133, 113, 0.3)'
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
