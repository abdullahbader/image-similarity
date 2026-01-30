import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photo Metadata Analysis - Extract Metadata from Images | PhotoAnalyzer',
  description: 'Extract comprehensive metadata from images including timestamps, GPS coordinates, camera information, and EXIF data. Analyze photo metadata to verify authenticity, track locations, and understand image origins.',
  keywords: 'photo metadata analysis, extract metadata from images, EXIF data extraction, image metadata analyzer, photo metadata extractor, GPS location extraction, camera information extraction, image timestamp extraction',
  openGraph: {
    title: 'Photo Metadata Analysis - Extract Metadata from Images',
    description: 'Extract comprehensive metadata from images including timestamps, GPS coordinates, and camera information.',
    type: 'website',
    url: 'https://photoanalyser.com/photo-metadata-analysis',
  },
  alternates: {
    canonical: 'https://photoanalyser.com/photo-metadata-analysis',
  },
}

export default function PhotoMetadataAnalysisPage() {
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
          Photo Metadata Analysis — Extract Metadata from Images
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#4D4D4D',
          lineHeight: '1.7',
          marginBottom: '32px'
        }}>
          Extract comprehensive metadata from your images including timestamps, GPS coordinates, camera make/model, 
          device information, and technical specifications. Analyze photo metadata to verify authenticity, track 
          locations, understand image origins, and detect potential fraud.
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
          What Metadata Can Be Extracted?
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📅</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Timestamps
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Extract date and time when the photo was taken, modified, or created. Verify when images were 
              actually captured to detect fraud or verify authenticity.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📍</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              GPS Coordinates
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Extract GPS location data from original photos (when available). Visualize locations on maps and 
              verify geographic authenticity of images.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📷</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Camera Information
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Extract camera make, model, lens information, ISO settings, aperture, shutter speed, and other 
              technical specifications from EXIF data.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💻</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Device Information
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Extract device manufacturer, model, software version, and other device-specific metadata to 
              understand image origins.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📐</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Image Properties
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Extract image dimensions, file size, color space, orientation, compression settings, and other 
              technical image properties.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔒</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Privacy & Security
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              All metadata extraction happens locally in your browser. Your images never leave your device, 
              ensuring complete privacy and security.
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
          Use Cases for Photo Metadata Analysis
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px'
            }}>
              🕵️ Fraud Investigation
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Verify image authenticity by checking timestamps, GPS locations, and camera information. Detect 
              if images have been manipulated or if metadata has been altered.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px'
            }}>
              📸 Photo Organization
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Organize large photo collections by extracting metadata. Group photos by date, location, camera, 
              or other metadata fields to create searchable databases.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px'
            }}>
              🗺️ Location Tracking
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Extract GPS coordinates from photos to track locations, create travel maps, or verify where 
              images were taken. Visualize photo locations on interactive maps.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px'
            }}>
              ⚖️ Legal Documentation
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Extract metadata to establish chain of custody for legal evidence. Verify timestamps and locations 
              to support legal cases and investigations.
            </p>
          </div>
        </div>
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
          Start Analyzing Photo Metadata
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
          color: '#4D4D4D',
          marginBottom: '24px'
        }}>
          Extract comprehensive metadata from your images &mdash; it&apos;s free and works entirely in your browser.
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
          Try Photo Metadata Analysis Now →
        </Link>
      </div>
    </main>
  )
}
