'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.99)',
      backdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(0, 133, 113, 0.06)',
      padding: 'clamp(18px, 2.5vw, 26px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'clamp(20px, 3vw, 32px)'
      }}>
        {/* Professional Logo/Brand */}
        <Link 
          href="/" 
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(10px, 1.8vw, 14px)',
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          <div style={{
            width: 'clamp(40px, 5.5vw, 48px)',
            height: 'clamp(40px, 5.5vw, 48px)',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(1.3rem, 2.8vw, 1.6rem)',
            boxShadow: '0 2px 8px rgba(0, 133, 113, 0.15)',
            flexShrink: 0
          }}>
            🔍
          </div>
          <div style={{ lineHeight: '1.3' }}>
            <div style={{
              fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
              fontWeight: '700',
              color: '#1E5050',
              letterSpacing: '-0.025em',
              marginBottom: '2px'
            }}>
              PhotoAnalyzer
            </div>
            <div style={{
              fontSize: 'clamp(0.65rem, 1.4vw, 0.75rem)',
              fontWeight: '600',
              color: '#008571',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Professional Edition
            </div>
          </div>
        </Link>
        
        {/* Professional Navigation Links */}
        <div style={{
          display: 'flex',
          gap: 'clamp(4px, 1vw, 8px)',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/faq', label: 'FAQ' },
            { href: '/contact', label: 'Contact' }
          ].map((item) => {
            const isActive = pathname === item.href
            return (
              <Link 
                key={item.href}
                href={item.href}
                style={{
                  color: isActive ? '#008571' : '#64748b',
                  textDecoration: 'none',
                  fontWeight: isActive ? '600' : '500',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  padding: 'clamp(10px, 1.8vw, 14px) clamp(20px, 3vw, 28px)',
                  borderRadius: '8px',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  background: isActive 
                    ? 'rgba(0, 133, 113, 0.06)'
                    : 'transparent',
                  border: isActive 
                    ? '1px solid rgba(0, 133, 113, 0.12)'
                    : '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#008571'
                    e.currentTarget.style.background = 'rgba(0, 133, 113, 0.04)'
                    e.currentTarget.style.borderColor = 'rgba(0, 133, 113, 0.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#64748b'
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'transparent'
                  }
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
