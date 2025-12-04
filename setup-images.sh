#!/bin/bash

# Create images directory
mkdir -p public/images

# Copy all images from parent directory
cp ../*.png public/images/

echo "Images copied successfully!"
ls -la public/images/

