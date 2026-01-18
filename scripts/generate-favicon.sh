#!/bin/bash
# Script to generate favicon.ico from RepRoKhanna_CA17_hires.png
# Requires ImageMagick: brew install imagemagick

if [ ! -f "public/RepRoKhanna_CA17_hires.png" ]; then
  echo "Error: public/RepRoKhanna_CA17_hires.png not found"
  exit 1
fi

# Generate favicon.ico (16x16, 32x32, 48x48 sizes)
convert public/RepRoKhanna_CA17_hires.png \
  \( -clone 0 -resize 16x16 \) \
  \( -clone 0 -resize 32x32 \) \
  \( -clone 0 -resize 48x48 \) \
  -delete 0 -alpha off -colors 256 public/favicon.ico

echo "✅ Favicon generated: public/favicon.ico"
