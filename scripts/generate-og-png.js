// Node script to convert public/og-image.svg to public/og-image.png using sharp
// Usage:
// 1. npm install sharp --save-dev
// 2. node scripts/generate-og-png.js

const fs = require('fs')
const path = require('path')

async function run() {
  const svgPath = path.join(__dirname, '..', 'public', 'og-image.svg')
  const pngPath = path.join(__dirname, '..', 'public', 'og-image.png')

  if (!fs.existsSync(svgPath)) {
    console.error('SVG file not found:', svgPath)
    process.exit(1)
  }

  // Skip generation if PNG exists and is newer than SVG
  if (fs.existsSync(pngPath)) {
    const svgStat = fs.statSync(svgPath)
    const pngStat = fs.statSync(pngPath)
    if (pngStat.mtimeMs >= svgStat.mtimeMs) {
      console.log('OG PNG is up-to-date:', pngPath)
      return
    }
  }

  try {
    // Lazy require sharp so the script fails with a clear message if not installed
    const sharp = require('sharp')
    await sharp(svgPath)
      .resize(1200, 630, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(pngPath)

    console.log('Generated PNG:', pngPath)
  } catch (err) {
    console.error('Failed to generate PNG. Make sure `sharp` is installed.')
    console.error(err)
    process.exit(1)
  }
}

run()
