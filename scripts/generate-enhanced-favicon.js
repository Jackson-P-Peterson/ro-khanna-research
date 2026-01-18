const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

async function generateEnhancedFavicon() {
  const inputFile = path.join(__dirname, '../public/RepRoKhanna_CA17_hires.jpg');
  
  if (!fs.existsSync(inputFile)) {
    console.error('Error: RepRoKhanna_CA17_hires.jpg not found in public directory');
    process.exit(1);
  }

  try {
    // Create a circular favicon with border
    const createCircularFavicon = async (size) => {
      // Create circular mask
      const mask = Buffer.from(`
        <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="white"/>
        </svg>
      `);

      // Resize and apply circular mask
      const image = await sharp(inputFile)
        .resize(size, size, { fit: 'cover', position: 'center' })
        .png()
        .toBuffer();

      const circular = await sharp(image)
        .composite([
          {
            input: mask,
            blend: 'dest-in'
          }
        ])
        .png()
        .toBuffer();

      // Add border
      const bordered = await sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 220, g: 38, b: 38, alpha: 1 } // Red border
        }
      })
        .composite([
          {
            input: circular,
            left: 1,
            top: 1
          }
        ])
        .png()
        .toBuffer();

      return bordered;
    };

    // Generate different sizes
    const png16 = await createCircularFavicon(16);
    const png32 = await createCircularFavicon(32);
    const png48 = await createCircularFavicon(48);

    // Save individual PNG files
    fs.writeFileSync(path.join(__dirname, '../public/favicon-16x16.png'), png16);
    fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), png32);
    fs.writeFileSync(path.join(__dirname, '../public/favicon-48x48.png'), png48);

    // Create proper ICO file with multiple sizes
    const ico = await toIco([png16, png32, png48]);
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), ico);

    console.log('✅ Enhanced favicon generated successfully!');
    console.log('   - public/favicon.ico (proper ICO format with 16x16, 32x32, 48x48)');
    console.log('   - public/favicon-16x16.png');
    console.log('   - public/favicon-32x32.png');
    console.log('   - public/favicon-48x48.png');
  } catch (error) {
    console.error('Error generating enhanced favicon:', error);
    process.exit(1);
  }
}

generateEnhancedFavicon();
