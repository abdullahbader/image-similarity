'use client'

import { useState, useCallback } from 'react'
import ImageUpload from '@/components/ImageUpload'
import DataTable from '@/components/DataTable'
import Statistics from '@/components/Statistics'
import Visualizations from '@/components/Visualizations'
import { ImageMetadata } from '@/types'

export default function Home() {
  const [imageData, setImageData] = useState<ImageMetadata[]>([])
  const [filteredData, setFilteredData] = useState<ImageMetadata[]>([])
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)

  const handleImagesProcessed = useCallback((images: ImageMetadata[]) => {
    // Append new images to existing data instead of replacing
    setImageData(prev => {
      const combined = [...prev, ...images]
      // Remove duplicates based on filename
      const unique = combined.filter((img, index, self) => 
        index === self.findIndex(i => i.filename === img.filename)
      )
      return unique
    })
    setFilteredData(prev => {
      const combined = [...prev, ...images]
      const unique = combined.filter((img, index, self) => 
        index === self.findIndex(i => i.filename === img.filename)
      )
      return unique
    })
    // Don't clear selection when appending new images
  }, [])

  return (
    <main style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#FFFFFF',
      borderRadius: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      padding: 'clamp(16px, 3vw, 32px)',
      minHeight: 'calc(100vh - 40px)',
      position: 'relative',
      zIndex: 1
    }}>
      {/* Fancy Modern Header */}
      <div style={{
        marginBottom: 'clamp(32px, 5vw, 48px)',
        padding: 'clamp(32px, 5vw, 48px)',
        background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.08) 0%, rgba(30, 80, 80, 0.08) 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(0, 133, 113, 0.15)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 133, 113, 0.1)'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 133, 113, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(30, 80, 80, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: 'clamp(16px, 3vw, 24px)',
            padding: 'clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)',
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.1) 0%, rgba(30, 80, 80, 0.1) 100%)',
            borderRadius: '50px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', animation: 'pulse 2s ease-in-out infinite' }}>🔍</span>
            <span style={{
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Professional Photo Analysis
            </span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #008571 0%, #1E5050 50%, #008571 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'clamp(16px, 3vw, 24px)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            animation: 'gradientShift 3s ease infinite'
          }}>
            PhotoAnalyzer Pro
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            fontWeight: '600',
            color: '#1E5050',
            marginBottom: 'clamp(12px, 2vw, 16px)',
            lineHeight: '1.3'
          }}>
            Advanced Image Duplication Detection
          </p>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: '500',
            color: '#4D4D4D',
            marginBottom: 'clamp(20px, 3vw, 28px)',
            lineHeight: '1.6'
          }}>
            & Metadata Analysis Platform
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(12px, 2vw, 16px)',
            marginTop: 'clamp(20px, 3vw, 28px)'
          }}>
            {['🔍', '📊', '🗺️', '⚡'].map((icon, index) => (
              <div
                key={index}
                style={{
                  width: 'clamp(48px, 8vw, 64px)',
                  height: 'clamp(48px, 8vw, 64px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.1) 0%, rgba(30, 80, 80, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  border: '2px solid rgba(0, 133, 113, 0.2)',
                  animation: `float ${3 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
        <div style={{ 
          color: '#4D4D4D', 
          fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
          lineHeight: '1.7',
          width: '100%',
          margin: '0 auto',
          padding: 'clamp(0px, 2vw, 16px)'
        }}>
          <p style={{ marginBottom: 'clamp(16px, 3vw, 20px)', textAlign: 'center', fontWeight: '500' }}>
            PhotoAnalyzer Pro is a comprehensive solution for detecting duplicate images, analyzing photo metadata, 
            and verifying image authenticity. Our platform combines advanced perceptual hashing algorithms with 
            detailed metadata extraction to identify similar or identical images, detect potential fraud, and 
            provide complete transparency into your photo collection.
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.1) 0%, rgba(30, 80, 80, 0.1) 100%)',
            padding: 'clamp(16px, 3vw, 24px)',
            borderRadius: '12px',
            marginBottom: '24px',
            border: '2px solid rgba(0, 133, 113, 0.3)'
          }}>
            <p style={{ 
              marginBottom: '12px', 
              fontWeight: '600', 
              color: '#008571',
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              textAlign: 'center'
            }}>
              ✅ Key Capabilities
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#4D4D4D'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#008571', fontWeight: '600' }}>✓</span>
                <span><strong>Duplicate Detection:</strong> Works with <em>any image</em> - including photos from social media, 
                screenshots, edited images, or compressed files. Our advanced algorithms can detect duplicates even after 
                resizing, cropping, or format conversion.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#008571', fontWeight: '600' }}>✓</span>
                <span><strong>GPS Extraction:</strong> Only available for <em>original photos</em> taken directly from cameras 
                or devices with location services enabled. Images downloaded from social media platforms (Facebook, Instagram, 
                WhatsApp, etc.) have their GPS data removed for privacy and cannot be extracted.</span>
              </div>
            </div>
          </div>
          
          <div id="features" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '24px',
            scrollMarginTop: '100px'
          }}>
            <div style={{
              background: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 133, 113, 0.2)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#008571',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🔍 Duplicate Detection
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4D4D4D' }}>
                Advanced perceptual hashing algorithms identify duplicate and similar images, even after editing, 
                compression, or format conversion. Detect fraud and prevent duplicate submissions.
              </p>
            </div>

            <div style={{
              background: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 133, 113, 0.2)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#008571',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                📊 Metadata Extraction
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4D4D4D' }}>
                Extract comprehensive metadata including timestamps, GPS coordinates, camera make/model, 
                device information, and technical specifications from your images.
              </p>
            </div>

            <div style={{
              background: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 133, 113, 0.2)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#008571',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🗺️ Location Mapping
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#4D4D4D' }}>
                Visualize GPS coordinates on interactive maps, track photo locations, and verify geographic 
                authenticity of your image collection.
              </p>
            </div>
          </div>

          {/* Image Upload Section - After Key Capabilities */}
          <ImageUpload 
            onImagesProcessed={handleImagesProcessed}
            loading={loading}
            setLoading={setLoading}
          />
        </div>

      {/* Results Section - Appears directly after upload */}
      {imageData.length > 0 && (
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          marginTop: 'clamp(32px, 5vw, 48px)',
          marginBottom: 'clamp(32px, 5vw, 48px)'
        }}>
          <Statistics data={imageData} />
          <DataTable 
            data={imageData} 
            onFilteredDataChange={setFilteredData}
            selectedImages={selectedImages}
            onSelectionChange={setSelectedImages}
          />
          <Visualizations 
            data={filteredData}
            selectedImages={selectedImages}
            allData={imageData}
          />
        </div>
      )}

      {/* Use Cases Section */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: 'clamp(20px, 4vw, 40px)',
        padding: 'clamp(16px, 3vw, 28px)',
        background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
        borderRadius: '20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(20px, 4vw, 32px)',
          textAlign: 'center'
        }}>
          Real-World Use Cases
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#4D4D4D',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          marginBottom: 'clamp(24px, 4vw, 32px)',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Discover how PhotoAnalyzer Pro helps professionals and businesses verify authenticity, detect fraud, 
          and manage image collections effectively.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(20px, 3vw, 24px)'
        }}>
          {/* Use Case 1 */}
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(20px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px',
              textAlign: 'center'
            }}>🛡️</div>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Insurance Fraud Detection
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.7',
              color: '#4D4D4D',
              marginBottom: '12px'
            }}>
              Insurance companies can verify claim authenticity by detecting if the same damage photos are submitted 
              multiple times or if images have been reused from previous claims. Upload claim photos to identify 
              duplicates and verify timestamps.
            </p>
            <div style={{
              background: 'rgba(0, 133, 113, 0.05)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#1E5050',
              fontStyle: 'italic'
            }}>
              <strong>Example:</strong> Detect if a car accident photo submitted in 2024 was actually taken in 2022 
              by comparing with your database of previous claims.
            </div>
          </div>

          {/* Use Case 2 */}
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(20px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px',
              textAlign: 'center'
            }}>📱</div>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Social Media Content Verification
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.7',
              color: '#4D4D4D',
              marginBottom: '12px'
            }}>
              Content creators and marketers can verify if images posted on social media are original or duplicates. 
              Even though GPS data isn&apos;t available from social media downloads, duplicate detection still works perfectly 
              to identify reused content.
            </p>
            <div style={{
              background: 'rgba(0, 133, 113, 0.05)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#1E5050',
              fontStyle: 'italic'
            }}>
              <strong>Example:</strong> Check if an influencer is posting the same product photos across multiple 
              campaigns or if competitors are using your images.
            </div>
          </div>

          {/* Use Case 3 */}
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(20px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px',
              textAlign: 'center'
            }}>🏠</div>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Real Estate Documentation
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.7',
              color: '#4D4D4D',
              marginBottom: '12px'
            }}>
              Real estate agents can verify property photos are current and not reused from old listings. Extract GPS 
              coordinates from original photos to verify property locations and ensure photos match the listed address.
            </p>
            <div style={{
              background: 'rgba(0, 133, 113, 0.05)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#1E5050',
              fontStyle: 'italic'
            }}>
              <strong>Example:</strong> Verify that property photos were taken at the correct location and detect if 
              the same photos are being used for multiple properties.
            </div>
          </div>

          {/* Use Case 4 */}
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(20px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px',
              textAlign: 'center'
            }}>📸</div>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Photo Library Management
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.7',
              color: '#4D4D4D',
              marginBottom: '12px'
            }}>
              Photographers and businesses can organize large photo collections by identifying duplicate images, 
              grouping similar photos, and extracting metadata to create searchable databases. Works with images 
              from any source.
            </p>
            <div style={{
              background: 'rgba(0, 133, 113, 0.05)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#1E5050',
              fontStyle: 'italic'
            }}>
              <strong>Example:</strong> Find and remove duplicate photos from a 10,000-image library, or group photos 
              taken at the same location using GPS data.
            </div>
          </div>

          {/* Use Case 5 */}
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(20px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px',
              textAlign: 'center'
            }}>⚖️</div>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Legal Evidence Verification
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.7',
              color: '#4D4D4D',
              marginBottom: '12px'
            }}>
              Legal professionals can verify the authenticity of photographic evidence by checking timestamps, GPS 
              locations, and detecting if images have been manipulated or duplicated. Extract metadata to establish 
              chain of custody.
            </p>
            <div style={{
              background: 'rgba(0, 133, 113, 0.05)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#1E5050',
              fontStyle: 'italic'
            }}>
              <strong>Example:</strong> Verify that evidence photos were taken at the claimed time and location, 
              and detect if the same image appears in multiple case files.
            </div>
          </div>

          {/* Use Case 6 */}
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(20px, 3vw, 28px)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '16px',
              textAlign: 'center'
            }}>🛒</div>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              E-commerce Product Verification
            </h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: '1.7',
              color: '#4D4D4D',
              marginBottom: '12px'
            }}>
              Online marketplaces can detect if sellers are using duplicate product images or stolen photos. Verify 
              product authenticity and ensure sellers aren&apos;t reusing images from other listings or competitors.
            </p>
            <div style={{
              background: 'rgba(0, 133, 113, 0.05)',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#1E5050',
              fontStyle: 'italic'
            }}>
              <strong>Example:</strong> Detect if a seller is using the same product photo across multiple listings 
              or if product images match known stock photos from other sources.
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: 'clamp(20px, 4vw, 40px)',
        padding: 'clamp(16px, 3vw, 28px)',
        background: '#FFFFFF',
        borderRadius: '20px',
        border: '1px solid rgba(0, 133, 113, 0.1)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(24px, 4vw, 32px)',
          textAlign: 'center'
        }}>
          How It Works
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(20px, 3vw, 32px)',
          width: '100%',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '2rem',
              color: '#FFFFFF',
              fontWeight: 'bold'
            }}>1</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#1E5050',
              marginBottom: '8px'
            }}>Upload Images</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              Upload single images, multiple files, or entire folders. Supports JPG, PNG, TIFF, BMP, and HEIC formats.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '2rem',
              color: '#FFFFFF',
              fontWeight: 'bold'
            }}>2</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#1E5050',
              marginBottom: '8px'
            }}>Automatic Analysis</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              Our system extracts metadata, calculates perceptual hashes, and identifies duplicate images automatically.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '2rem',
              color: '#FFFFFF',
              fontWeight: 'bold'
            }}>3</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#1E5050',
              marginBottom: '8px'
            }}>View Results</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              Explore detailed metadata, filter duplicates, visualize GPS locations on maps, and export results to Excel.
            </p>
          </div>
        </div>
      </div>

      {/* Features Highlight Section */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: 'clamp(20px, 4vw, 40px)',
        padding: 'clamp(16px, 3vw, 28px)',
        background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
        borderRadius: '20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(24px, 4vw, 32px)',
          textAlign: 'center'
        }}>
          Powerful Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(16px, 3vw, 24px)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔎</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>Advanced Search & Filter</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              Search across all metadata fields, filter by date range, group by folder, and sort by any column for precise data analysis.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(16px, 3vw, 24px)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📊</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>Interactive Visualizations</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              View photo timelines, camera distribution charts, and GPS locations on interactive maps. Select specific images to focus your analysis.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(16px, 3vw, 24px)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📥</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>Export to Excel</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              Export filtered results with all metadata to Excel format for further analysis, reporting, or archival purposes.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(16px, 3vw, 24px)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔒</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>Privacy & Security</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              All processing happens locally in your browser. Your images never leave your device, ensuring complete privacy and data security.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(16px, 3vw, 24px)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚡</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>Batch Processing</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              Process hundreds or thousands of images simultaneously. Upload entire folders with recursive directory support for efficient bulk analysis.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(16px, 3vw, 24px)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 133, 113, 0.2)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎯</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>Smart Duplicate Detection</h3>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6'
            }}>
              Perceptual hashing detects duplicates even after editing, resizing, compression, or format conversion. Works with images from any source.
            </p>
          </div>
        </div>
      </div>

      {/* Supported Formats & Details Section - Compact */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: 'clamp(20px, 4vw, 32px)',
        padding: 'clamp(16px, 3vw, 24px)',
        background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
        borderRadius: '16px'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          fontWeight: '600',
          color: '#1E5050',
          marginBottom: 'clamp(16px, 3vw, 20px)',
          textAlign: 'center'
        }}>
          Supported Formats & Technical Details
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(12px, 2vw, 16px)',
          width: '100%'
        }}>
          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(12px, 2vw, 16px)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <h3 style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              📁 Formats
            </h3>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6',
              margin: 0
            }}>
              JPEG, PNG, TIFF, BMP, HEIC
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(12px, 2vw, 16px)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <h3 style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              💻 Browsers
            </h3>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6',
              margin: 0
            }}>
              Chrome, Firefox, Safari, Edge, Opera
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            padding: 'clamp(12px, 2vw, 16px)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <h3 style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '8px'
            }}>
              ⚡ Speed
            </h3>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#4D4D4D',
              lineHeight: '1.6',
              margin: 0
            }}>
              ~100 images in 30-60 seconds
            </p>
          </div>
        </div>
      </div>

      {/* Privacy & Security Section */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: 'clamp(20px, 4vw, 40px)',
        padding: 'clamp(16px, 3vw, 28px)',
        background: '#FFFFFF',
        borderRadius: '20px',
        border: '2px solid rgba(0, 133, 113, 0.2)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(20px, 4vw, 24px)',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <span>🔒</span>
          <span>Privacy & Security</span>
        </h2>
        <div style={{
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(20px, 3vw, 24px)'
        }}>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(16px, 3vw, 24px)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px'
            }}>🏠</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px'
            }}>100% Local Processing</h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#4D4D4D',
              lineHeight: '1.7'
            }}>
              All image analysis happens directly in your browser. Your images never leave your device and are never uploaded to any server.
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'clamp(16px, 3vw, 24px)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px'
            }}>🚫</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px'
            }}>No Data Collection</h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#4D4D4D',
              lineHeight: '1.7'
            }}>
              We don&apos;t collect, store, or track any of your images or metadata. Your data remains completely private and under your control.
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'clamp(16px, 3vw, 24px)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '16px'
            }}>✅</div>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              fontWeight: '600',
              color: '#008571',
              marginBottom: '12px'
            }}>GDPR Compliant</h3>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#4D4D4D',
              lineHeight: '1.7'
            }}>
              Since no data is collected or stored, our platform is fully compliant with GDPR, CCPA, and other privacy regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Metrics Section - Compact */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: 'clamp(20px, 4vw, 32px)',
        padding: 'clamp(16px, 3vw, 24px)',
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid rgba(0, 133, 113, 0.1)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          fontWeight: '600',
          color: '#1E5050',
          marginBottom: 'clamp(16px, 3vw, 20px)',
          textAlign: 'center'
        }}>
          Performance & Capabilities
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(12px, 2vw, 16px)',
          width: '100%'
        }}>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(12px, 2vw, 16px)',
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: '#008571',
              marginBottom: '8px'
            }}>
              100+
            </div>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#4D4D4D',
              margin: 0
            }}>
              Images/sec
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'clamp(12px, 2vw, 16px)',
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: '#008571',
              marginBottom: '8px'
            }}>
              ∞
            </div>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#4D4D4D',
              margin: 0
            }}>
              No size limit
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'clamp(12px, 2vw, 16px)',
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: '#008571',
              marginBottom: '8px'
            }}>
              5
            </div>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#4D4D4D',
              margin: 0
            }}>
              Formats
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'clamp(12px, 2vw, 16px)',
            background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 133, 113, 0.2)'
          }}>
            <div style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: '#008571',
              marginBottom: '8px'
            }}>
              100%
            </div>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              color: '#4D4D4D',
              margin: 0
            }}>
              Local processing
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: 'clamp(20px, 4vw, 40px)',
        padding: 'clamp(16px, 3vw, 28px)',
        background: 'linear-gradient(135deg, rgba(0, 133, 113, 0.05) 0%, rgba(30, 80, 80, 0.05) 100%)',
        borderRadius: '20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1E5050',
          marginBottom: 'clamp(24px, 4vw, 32px)',
          textAlign: 'center'
        }}>
          Why Choose PhotoAnalyzer Pro?
        </h2>
        <div style={{
          width: '100%',
          margin: '0 auto',
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            background: '#FFFFFF',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
          }}>
            <thead>
              <tr style={{
                background: 'linear-gradient(135deg, #008571 0%, #1E5050 100%)',
                color: '#FFFFFF'
              }}>
                <th style={{
                  padding: 'clamp(12px, 2vw, 16px)',
                  textAlign: 'left',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  fontWeight: '600'
                }}>Feature</th>
                <th style={{
                  padding: 'clamp(12px, 2vw, 16px)',
                  textAlign: 'center',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  fontWeight: '600'
                }}>PhotoAnalyzer Pro</th>
                <th style={{
                  padding: 'clamp(12px, 2vw, 16px)',
                  textAlign: 'center',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  fontWeight: '600'
                }}>Other Tools</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Duplicate Detection (Any Source)', pro: '✓', other: 'Limited' },
                { feature: '100% Local Processing', pro: '✓', other: '✗' },
                { feature: 'GPS Location Mapping', pro: '✓', other: '✓' },
                { feature: 'Batch Folder Processing', pro: '✓', other: 'Limited' },
                { feature: 'Excel Export', pro: '✓', other: 'Limited' },
                { feature: 'No File Size Limit', pro: '✓', other: '✗' },
                { feature: 'No Account Required', pro: '✓', other: '✗' },
                { feature: 'Free to Use', pro: '✓', other: 'Limited' },
                { feature: 'Works Offline', pro: '✓', other: '✗' },
                { feature: 'Privacy-First Design', pro: '✓', other: '✗' }
              ].map((row, index) => (
                <tr 
                  key={index}
                  style={{
                    borderBottom: '1px solid rgba(0, 133, 113, 0.1)',
                    background: index % 2 === 0 ? '#FFFFFF' : 'rgba(0, 133, 113, 0.02)'
                  }}
                >
                  <td style={{
                    padding: 'clamp(12px, 2vw, 16px)',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: '#4D4D4D',
                    fontWeight: '500'
                  }}>
                    {row.feature}
                  </td>
                  <td style={{
                    padding: 'clamp(12px, 2vw, 16px)',
                    textAlign: 'center',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    color: '#008571',
                    fontWeight: '600'
                  }}>
                    {row.pro}
                  </td>
                  <td style={{
                    padding: 'clamp(12px, 2vw, 16px)',
                    textAlign: 'center',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: '#4D4D4D'
                  }}>
                    {row.other}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </main>
  )
}



