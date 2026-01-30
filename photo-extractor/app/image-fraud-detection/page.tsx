import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Image Fraud Detection — Detect Fraudulent Photo Submissions | PhotoAnalyzer',
  description: 'Detect fraudulent photo submissions and prevent image fraud with our advanced image fraud detection tool. Check if images were submitted twice, identify reused photos, and verify image authenticity for insurance claims, marketplaces, and legal cases.',
  keywords: 'image fraud detection, detect fraudulent photo submissions, check uploaded photo fraud, prevent image fraud, photo fraud detection tool, detect duplicate image submissions in insurance, image authenticity verification',
  openGraph: {
    title: 'Image Fraud Detection — Detect Fraudulent Photo Submissions',
    description: 'Detect fraudulent photo submissions and prevent image fraud with our advanced detection tool.',
    type: 'website',
    url: 'https://photoanalyser.com/image-fraud-detection',
  },
  alternates: {
    canonical: 'https://photoanalyser.com/image-fraud-detection',
  },
}

export default function ImageFraudDetectionPage() {
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
          Image Fraud Detection — Detect Fraudulent Photo Submissions
        </h1>
        
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#4D4D4D',
          lineHeight: '1.7',
          marginBottom: '32px'
        }}>
          Protect your business from image fraud with our advanced fraud detection tool. Detect fraudulent photo 
          submissions, check if images were submitted twice, identify reused photos, and verify image authenticity 
          for insurance claims, marketplaces, legal cases, and more.
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
          How Image Fraud Detection Works
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
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔍</div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              Detect Duplicate Submissions
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Identify if the same image was submitted multiple times, even after editing or compression. 
              Perfect for detecting duplicate insurance claims or repeated form submissions.
            </p>
          </div>

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
              Verify Timestamps
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Extract and verify photo timestamps to ensure images were taken at the claimed time. 
              Detect if old photos are being reused for new claims or submissions.
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
              Check GPS Locations
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.6' }}>
              Verify GPS coordinates from original photos to confirm images were taken at the claimed location. 
              Detect geographic inconsistencies in submissions.
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
          Use Cases for Image Fraud Detection
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
              🛡️ Insurance Fraud Detection
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Detect if the same damage photos are submitted multiple times or if images have been reused 
              from previous claims. Verify claim authenticity by checking timestamps and detecting duplicates.
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
              🛒 E-commerce Verification
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Prevent sellers from using duplicate product images or stolen photos. Verify product authenticity 
              and ensure sellers aren't reusing images from other listings or competitors.
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
              ⚖️ Legal Evidence Verification
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Verify the authenticity of photographic evidence by checking timestamps, GPS locations, and detecting 
              if images have been manipulated or duplicated. Establish chain of custody with metadata extraction.
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
              📋 Form Submission Verification
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#4D4D4D', lineHeight: '1.7' }}>
              Prevent users from submitting the same photo multiple times in surveys, applications, or verification 
              forms. Detect duplicate image uploads automatically.
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
          Start Detecting Image Fraud Today
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
          color: '#4D4D4D',
          marginBottom: '24px'
        }}>
          Protect your business from fraudulent photo submissions with our advanced image fraud detection tool.
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
          Try Image Fraud Detection Now →
        </Link>
      </div>
    </main>
  )
}
