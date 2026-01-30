'use client'

import Link from 'next/link'
import { contactConfig } from '@/config/contact'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(0, 133, 113, 0.1)',
      padding: 'clamp(32px, 4vw, 48px)',
      marginTop: 'clamp(40px, 6vw, 60px)',
      color: '#4D4D4D'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(24px, 3vw, 32px)',
          textAlign: 'center'
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '12px'
            }}>
              🔍 PhotoAnalyzer Pro
            </h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              Professional photo analysis and fraud detection platform
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            gap: 'clamp(20px, 3vw, 32px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Link href="/" style={{
              color: '#4D4D4D',
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#008571'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4D4D4D'}
            >
              Home
            </Link>
            <span style={{ color: '#ccc' }}>•</span>
            <Link href="/#features" style={{
              color: '#4D4D4D',
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#008571'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4D4D4D'}
            >
              Features
            </Link>
            <span style={{ color: '#ccc' }}>•</span>
            <Link href="/faq" style={{
              color: '#4D4D4D',
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#008571'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4D4D4D'}
            >
              FAQ
            </Link>
            <span style={{ color: '#ccc' }}>•</span>
            <Link href="/contact" style={{
              color: '#4D4D4D',
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#008571'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4D4D4D'}
            >
              Contact
            </Link>
          </div>

          {/* Contact Link */}
          <div>
            <Link 
              href="/contact"
              style={{
                color: '#008571',
                textDecoration: 'none',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1E5050'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#008571'}
            >
              📧 Contact Us
            </Link>
          </div>

          {/* Copyright */}
          <div style={{
            paddingTop: 'clamp(20px, 3vw, 24px)',
            borderTop: '1px solid rgba(0, 133, 113, 0.1)',
            width: '100%'
          }}>
            <p style={{
              fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)',
              color: '#6b7280',
              margin: 0
            }}>
              © {currentYear} {contactConfig.companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
