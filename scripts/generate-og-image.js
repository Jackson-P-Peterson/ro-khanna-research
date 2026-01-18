const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const inputFile = path.join(__dirname, '../public/RepRoKhanna_CA17_hires.jpg');
  const outputFile = path.join(__dirname, '../public/og-image.jpg');
  
  if (!fs.existsSync(inputFile)) {
    console.error('Error: RepRoKhanna_CA17_hires.jpg not found in public directory');
    process.exit(1);
  }

  try {
    // Create a 1200x630 image (optimal OG image size)
    // Resize and crop the image to fit
    const image = await sharp(inputFile)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90 })
      .toBuffer();

    // Create an SVG overlay with text
    const svgOverlay = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <!-- Dark overlay for text readability -->
        <rect width="1200" height="630" fill="rgba(0,0,0,0.5)"/>
        <!-- Gradient overlay -->
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgba(220,38,38,0.8);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(0,0,0,0.9);stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#grad)"/>
        <!-- Main Title -->
        <text x="600" y="200" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle" stroke="rgba(0,0,0,0.3)" stroke-width="2">
          Opposition Research
        </text>
        <!-- Subtitle -->
        <text x="600" y="280" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#f97316" text-anchor="middle">
          Representative Ro Khanna
        </text>
        <!-- Description -->
        <text x="600" y="380" font-family="Arial, sans-serif" font-size="32" fill="rgba(255,255,255,0.9)" text-anchor="middle">
          Financial Disclosures • Legislative Actions • Campaign Ethics
        </text>
        <!-- Bottom accent -->
        <rect x="0" y="580" width="1200" height="50" fill="rgba(220,38,38,0.8)"/>
      </svg>
    `;

    // Composite the image with the SVG overlay
    const finalImage = await sharp(image)
      .composite([
        {
          input: Buffer.from(svgOverlay),
          blend: 'over'
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(outputFile);

    console.log('✅ OG Image generated successfully!');
    console.log('   - public/og-image.jpg (1200x630)');
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
