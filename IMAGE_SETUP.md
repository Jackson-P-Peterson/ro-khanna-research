# Image and Favicon Setup

## Required Image File

Place the file `RepRoKhanna_CA17_hires.png` in the `/public` directory:

```
public/RepRoKhanna_CA17_hires.png
```

## What This Image Is Used For

1. **Open Graph (OG) Image** - Appears when sharing links on:
   - Facebook
   - LinkedIn
   - Twitter/X
   - Slack
   - Discord
   - Other social platforms

2. **Twitter Card** - Large image preview on Twitter/X

3. **Apple Touch Icon** - Icon when adding to iOS home screen

## Generating Favicon

Once you've added the image file, you can generate a favicon from it:

```bash
# Install ImageMagick (if not already installed)
brew install imagemagick

# Generate favicon
./scripts/generate-favicon.sh
```

Or manually create a favicon using any image editor by resizing the image to 16x16, 32x32, and 48x48 pixels.

## Current Setup

- ✅ Open Graph metadata configured
- ✅ Twitter Card metadata configured  
- ✅ Favicon path configured
- ✅ SVG favicon created as fallback
- ⏳ Waiting for `RepRoKhanna_CA17_hires.png` file

## Testing

After adding the image, test the Open Graph tags using:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
