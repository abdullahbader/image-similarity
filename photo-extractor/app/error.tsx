'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

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
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: '700',
        color: '#1E5050',
        marginBottom: '16px'
      }}>
        Something went wrong!
      </h1>
      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: '#4D4D4D',
        marginBottom: '32px',
        maxWidth: '600px'
      }}>
        We encountered an unexpected error. Please try again.
      </p>
      <button
        onClick={reset}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#FFFFFF',
          background: '#008571',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#1E5050'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#008571'
        }}
      >
        Try again
      </button>
    </div>
  )
}
