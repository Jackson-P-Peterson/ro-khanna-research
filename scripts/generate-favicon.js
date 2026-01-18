const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

async function generateFavicon() {
  const inputFile = path.join(__dirname, '../public/RepRoKhanna_CA17_hires.jpg');
  const outputFile = path.join(__dirname, '../public/favicon.ico');
  
  if (!fs.existsSync(inputFile)) {
    console.error('Error: RepRoKhanna_CA17_hires.jpg not found in public directory');
    process.exit(1);
  }

  try {
    // Create 16x16 PNG
    const png16 = await sharp(inputFile)
      .resize(16, 16, { fit: 'cover' })
      .png()
      .toBuffer();

    // Create 32x32 PNG
    const png32 = await sharp(inputFile)
      .resize(32, 32, { fit: 'cover' })
      .png()
      .toBuffer();

    // Save individual PNG files
    fs.writeFileSync(path.join(__dirname, '../public/favicon-16x16.png'), png16);
    fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), png32);

    // Create proper ICO file with multiple sizes
    const ico = await toIco([png16, png32]);
    fs.writeFileSync(outputFile, ico);

    console.log('✅ Favicon generated successfully!');
    console.log('   - public/favicon.ico (proper ICO format)');
    console.log('   - public/favicon-32x32.png');
    console.log('   - public/favicon-16x16.png');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
