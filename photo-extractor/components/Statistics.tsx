'use client'

import { ImageMetadata } from '@/types'

interface StatisticsProps {
  data: ImageMetadata[]
}

export default function Statistics({ data }: StatisticsProps) {
  const totalImages = data.length
  const uniqueDevices = new Set(data.map(img => img.device_id).filter(Boolean)).size
  const totalSize = data.reduce((sum, img) => sum + (img.size_mb || 0), 0)
  
  // GPS statistics
  const imagesWithGPS = data.filter(img => 
    img.latitude !== undefined && 
    img.longitude !== undefined && 
    img.location && 
    img.location !== 'No GPS'
  ).length
  const imagesWithoutGPS = totalImages - imagesWithGPS
  
  const dateRange = data
    .map(img => img.datetime_obj)
    .filter(Boolean) as Date[]
  const timeSpan = dateRange.length > 0
    ? Math.ceil((Math.max(...dateRange.map(d => d.getTime())) - Math.min(...dateRange.map(d => d.getTime()))) / (1000 * 60 * 60 * 24))
    : 0

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
      gap: 'clamp(12px, 3vw, 20px)',
      marginBottom: '30px'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
        borderRadius: '12px',
        padding: 'clamp(16px, 4vw, 24px)',
        color: 'white',
        boxShadow: '0 4px 20px rgba(0, 133, 113, 0.3)'
      }}>
        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', opacity: 0.9, marginBottom: '8px', fontWeight: '500' }}>Total Images</div>
        <div style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 'bold' }}>{totalImages}</div>
      </div>
      
      <div style={{
        background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
        borderRadius: '8px',
        padding: 'clamp(16px, 4vw, 20px)',
        color: 'white'
      }}>
        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', opacity: 0.9, marginBottom: '5px' }}>Unique Devices</div>
        <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold' }}>{uniqueDevices}</div>
      </div>
      
      <div style={{
        background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
        borderRadius: '8px',
        padding: 'clamp(16px, 4vw, 20px)',
        color: 'white'
      }}>
        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', opacity: 0.9, marginBottom: '5px' }}>Time Span</div>
        <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold' }}>{timeSpan} days</div>
      </div>
      
      <div style={{
        background: 'linear-gradient(135deg, #1E5050 0%, #008571 100%)',
        borderRadius: '8px',
        padding: 'clamp(16px, 4vw, 20px)',
        color: 'white'
      }}>
        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', opacity: 0.9, marginBottom: '5px' }}>Total Size</div>
        <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold' }}>{totalSize.toFixed(1)} MB</div>
      </div>
      
      <div style={{
        background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
        borderRadius: '8px',
        padding: 'clamp(16px, 4vw, 20px)',
        color: 'white'
      }}>
        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', opacity: 0.9, marginBottom: '5px' }}>With GPS</div>
        <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold' }}>
          {imagesWithGPS}
          {totalImages > 0 && (
            <span style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '500', marginLeft: '8px', opacity: 0.9 }}>
              ({Math.round((imagesWithGPS / totalImages) * 100)}%)
            </span>
          )}
        </div>
      </div>
      
      {imagesWithoutGPS > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, #1E5050 0%, #008571 100%)',
          borderRadius: '8px',
          padding: 'clamp(16px, 4vw, 20px)',
          color: 'white'
        }}>
          <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', opacity: 0.9, marginBottom: '5px' }}>Without GPS</div>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold' }}>
            {imagesWithoutGPS}
            {totalImages > 0 && (
              <span style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: '500', marginLeft: '8px', opacity: 0.9 }}>
                ({Math.round((imagesWithoutGPS / totalImages) * 100)}%)
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}



