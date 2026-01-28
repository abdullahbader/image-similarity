import Link from 'next/link'
import './globals.css'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      background: '#f9fafb'
    }}>
      <h1 style={{
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        fontWeight: '800',
        color: '#008571',
        marginBottom: '16px',
        lineHeight: '1'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: '700',
        color: '#1E5050',
        marginBottom: '16px'
      }}>
        Page Not Found
      </h2>
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: '#4D4D4D',
        marginBottom: '32px',
        maxWidth: '600px'
      }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="not-found-link"
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#FFFFFF',
          background: '#008571',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'background 0.2s'
        }}
      >
        Go back home
      </Link>
    </div>
  )
}
