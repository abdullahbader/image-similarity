'use client'

import { useState, useRef } from 'react'
import { ImageMetadata } from '@/types'
import { extractImageMetadata } from '@/utils/exifExtractor'
import { calculateImageHash, findSimilarImages } from '@/utils/imageHash'

interface ImageUploadProps {
  onImagesProcessed: (images: ImageMetadata[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export default function ImageUpload({ onImagesProcessed, loading, setLoading }: ImageUploadProps) {
  const [uploadMethod, setUploadMethod] = useState<'single' | 'multiple' | 'folder'>('single')
  const [progress, setProgress] = useState({ current: 0, total: 0, percentage: 0, timeRemaining: 0 })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const folderInputRef = useRef<HTMLInputElement>(null)
  const startTimeRef = useRef<number>(0)
  const processingTimesRef = useRef<number[]>([])

  const formatTime = (seconds: number): string => {
    if (seconds < 60) {
      return `${Math.ceil(seconds)}s`
    } else if (seconds < 3600) {
      const mins = Math.floor(seconds / 60)
      const secs = Math.ceil(seconds % 60)
      return `${mins}m ${secs}s`
    } else {
      const hours = Math.floor(seconds / 3600)
      const mins = Math.floor((seconds % 3600) / 60)
      return `${hours}h ${mins}m`
    }
  }

  const processFiles = async (files: FileList | File[]) => {
    setLoading(true)
    const images: ImageMetadata[] = []
    
    // Convert to array if needed
    const fileArray = Array.isArray(files) ? files : Array.from(files)
    
    // Filter to only image files
    const imageFiles = fileArray.filter(file => file.type.startsWith('image/'))
    const totalImages = imageFiles.length
    
    if (totalImages === 0) {
      alert('No image files found. Please select image files.')
      setLoading(false)
      return
    }

    // Initialize progress
    setProgress({ current: 0, total: totalImages, percentage: 0, timeRemaining: 0 })
    startTimeRef.current = Date.now()
    processingTimesRef.current = []

    try {
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i]
        const fileStartTime = Date.now()

        try {
          const metadata = await extractImageMetadata(file)
          if (metadata) {
            try {
              const hash = await calculateImageHash(file)
              metadata.hash = hash
            } catch (hashError) {
              console.warn('Error calculating hash for', file.name, ':', hashError)
              // Continue without hash
            }
            images.push(metadata)
          } else {
            console.warn('No metadata extracted for:', file.name)
          }
        } catch (fileError) {
          console.error('Error processing file:', file.name, fileError)
          // Continue processing other files
        }

        // Calculate progress
        const fileProcessingTime = (Date.now() - fileStartTime) / 1000
        processingTimesRef.current.push(fileProcessingTime)
        
        const current = i + 1
        const percentage = Math.round((current / totalImages) * 100)
        
        // Calculate average processing time and estimate remaining time
        const avgProcessingTime = processingTimesRef.current.reduce((a, b) => a + b, 0) / processingTimesRef.current.length
        const remainingImages = totalImages - current
        const estimatedTimeRemaining = avgProcessingTime * remainingImages
        
        setProgress({
          current,
          total: totalImages,
          percentage,
          timeRemaining: estimatedTimeRemaining
        })
      }

      if (images.length === 0) {
        alert('No images were successfully processed. Please check the console for errors.')
        setLoading(false)
        setProgress({ current: 0, total: 0, percentage: 0, timeRemaining: 0 })
        return
      }

      // Update progress to show similarity calculation
      setProgress({
        current: totalImages,
        total: totalImages,
        percentage: 95,
        timeRemaining: 0
      })

      // Calculate similarity after all images are processed
      const imagesWithSimilarity = findSimilarImages(images)
      
      // Final progress update
      setProgress({
        current: totalImages,
        total: totalImages,
        percentage: 100,
        timeRemaining: 0
      })
      
      onImagesProcessed(imagesWithSimilarity)
    } catch (error) {
      console.error('Error processing images:', error)
      alert('Error processing images: ' + (error instanceof Error ? error.message : String(error)))
    } finally {
      setLoading(false)
      // Reset progress after a short delay
      setTimeout(() => {
        setProgress({ current: 0, total: 0, percentage: 0, timeRemaining: 0 })
      }, 1000)
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      await processFiles(files)
      // Reset input to allow selecting the same folder again
      e.target.value = ''
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      await processFiles(files)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleFolderClick = () => {
    console.log('handleFolderClick called, ref:', folderInputRef.current)
    if (folderInputRef.current) {
      console.log('Clicking folder input')
      folderInputRef.current.click()
    } else {
      console.error('Folder input ref is not set')
    }
  }
  
  const handleFileClick = () => {
    console.log('handleFileClick called, ref:', fileInputRef.current)
    if (fileInputRef.current) {
      console.log('Clicking file input')
      fileInputRef.current.click()
    } else {
      console.error('File input ref is not set')
    }
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.03) 0%, rgba(30, 80, 80, 0.03) 100%)',
      borderRadius: '20px',
      padding: 'clamp(16px, 4vw, 32px)',
      marginBottom: '32px',
      border: '1px solid rgba(0, 133, 113, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
    }}>
      <h2 style={{ 
        marginBottom: '24px', 
        fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', 
        fontWeight: '700',
        background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        📁 Upload Images
      </h2>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '12px', 
          fontWeight: '600',
          color: '#4D4D4D',
          fontSize: '0.95rem'
        }}>
          Upload Method:
        </label>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(['single', 'multiple', 'folder'] as const).map((method) => (
            <button
              key={method}
              onClick={() => setUploadMethod(method)}
              style={{
                padding: 'clamp(10px, 2vw, 12px) clamp(16px, 4vw, 24px)',
                borderRadius: '12px',
                border: 'none',
                background: uploadMethod === method 
                  ? 'linear-gradient(135deg, #008571 0%, #1E5050 100%)'
                  : '#FFFFFF',
                color: uploadMethod === method ? 'white' : '#4D4D4D',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                transition: 'all 0.2s ease',
                boxShadow: uploadMethod === method 
                  ? '0 4px 12px rgba(0, 133, 113, 0.4)'
                  : '0 2px 8px rgba(0, 0, 0, 0.05)',
                transform: uploadMethod === method ? 'translateY(-2px)' : 'none',
                flex: '1 1 auto',
                minWidth: 'fit-content'
              }}
              onMouseEnter={(e) => {
                if (uploadMethod !== method) {
                  e.currentTarget.style.background = '#EFFFE5'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }}
              onMouseLeave={(e) => {
                if (uploadMethod !== method) {
                  e.currentTarget.style.background = '#FFFFFF'
                  e.currentTarget.style.transform = 'none'
                }
              }}
            >
              {method === 'single' ? 'Single Image' : method === 'multiple' ? 'Multiple Images' : 'Folder'}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Border Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (uploadMethod === 'folder') {
            handleFolderClick()
          } else {
            handleFileClick()
          }
        }}
        style={{
          position: 'relative',
          borderRadius: '16px',
          padding: '3px',
          background: 'linear-gradient(135deg, #008571, #1E5050, #008571)',
          backgroundSize: '200% 200%',
          animation: 'borderRotate 3s linear infinite',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 133, 113, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Inner content area */}
        <div 
          style={{
            borderRadius: '13px',
            padding: 'clamp(24px, 6vw, 48px)',
            textAlign: 'center',
            background: '#EFFFE5',
            backdropFilter: 'blur(10px)',
            transition: 'background 0.3s ease',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            pointerEvents: 'none'
          }}
        >
        {loading ? (
          <div style={{ width: '100%' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px', animation: 'spin 1s linear infinite' }}>⏳</div>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#4D4D4D', marginBottom: '20px' }}>
              Processing images...
            </p>
            
            {/* Progress Bar */}
            <div style={{ 
              width: '100%', 
              marginBottom: '12px',
              background: 'rgba(0, 133, 113, 0.1)',
              borderRadius: '12px',
              height: '12px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '100%',
                width: `${progress.percentage}%`,
                background: 'linear-gradient(90deg, #008571 0%, #1E5050 100%)',
                borderRadius: '12px',
                transition: 'width 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 133, 113, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'shimmer 2s infinite'
                }} />
              </div>
            </div>

            {/* Progress Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9rem',
              color: '#6b7280',
              fontWeight: '500'
            }}>
              <span>
                {progress.current} / {progress.total} images ({progress.percentage}%)
              </span>
              {progress.timeRemaining > 0 && (
                <span>
                  ~{formatTime(progress.timeRemaining)} remaining
                </span>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Animated Icons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(16px, 3vw, 24px)',
              marginBottom: 'clamp(20px, 4vw, 28px)',
              flexWrap: 'wrap'
            }}>
              {['📷', '📤', '✨', '🔍'].map((icon, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    animation: `float ${2.5 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                    filter: 'drop-shadow(0 4px 8px rgba(0, 133, 113, 0.2))',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2) rotate(5deg)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
            <>
              <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', marginBottom: 'clamp(12px, 2vw, 16px)', fontWeight: '600', color: '#374151' }}>
                {uploadMethod === 'single' && 'Click or drag to upload a single image'}
                {uploadMethod === 'multiple' && 'Click or drag to upload multiple images'}
                {uploadMethod === 'folder' && 'Click to select a folder (includes all nested subfolders)'}
              </p>
              <p style={{ color: '#4D4D4D', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: '400', marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>
                Supports: JPG, PNG, TIFF, BMP, HEIC
              </p>
              {uploadMethod === 'folder' && (
                <p style={{ color: '#008571', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', fontWeight: '500', fontStyle: 'italic' }}>
                  💡 Tip: You can upload multiple folders - select a folder, then select another folder to add more images
                </p>
              )}
            </>
          </>
        )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={uploadMethod === 'multiple'}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <input
        ref={folderInputRef}
        type="file"
        accept="image/*"
        {...({ webkitdirectory: '' } as any)}
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="folder-input"
      />
    </div>
  )
}



