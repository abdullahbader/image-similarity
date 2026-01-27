# 📸 Photo Timestamp Extractor Pro

A modern web application built with Next.js and React for extracting, analyzing, and filtering EXIF metadata from photos.

## Features

- 📷 **Image Upload**: Single, multiple, or folder upload
- 🔍 **EXIF Extraction**: Extract all metadata including GPS, camera info, timestamps
- 🖼️ **Image Similarity**: Detect duplicates and similar images using perceptual hashing
- 🎯 **Hover Previews**: Hover over filenames to see image previews
- 🔎 **Search & Filter**: Global search, date range filtering, column sorting
- 📊 **Visualizations**: Timeline, maps, camera distribution charts
- 💾 **Export**: Export to Excel or JSON
- 📱 **Responsive**: Works on desktop and mobile

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14**: React framework
- **React 18**: UI library
- **exifr**: EXIF metadata extraction
- **image-hash**: Perceptual image hashing for similarity detection
- **xlsx**: Excel export
- **recharts**: Data visualizations
- **leaflet**: Interactive maps

## License

MIT



