# PWA Icons

This folder contains the PWA icons for the Fitness Tracker app.

## Required Icons

- `icon-192.png` - 192x192 pixels (required for PWA)
- `icon-512.png` - 512x512 pixels (required for PWA)
- `favicon.ico` - Standard favicon (optional)

## Generating Icons

### Option 1: Using the Icon Generator

1. Open `icon-generator.html` in your browser
2. Click "Generate Icons" button
3. Right-click on each canvas and save as PNG
4. Save them as `icon-192.png` and `icon-512.png` in this folder

### Option 2: Using Online Tools

1. Use an online icon generator like:
   - [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)
   - [RealFaviconGenerator](https://realfavicongenerator.net/)
   - [Favicon.io](https://favicon.io/)

2. Create a 512x512 base icon with a dumbbell or fitness theme
3. Generate all required sizes

### Option 3: Using Image Editing Software

1. Create a 512x512 image with a fitness theme (dumbbell, weights, etc.)
2. Use image editing software (Photoshop, GIMP, etc.) to resize to 192x192
3. Save as PNG files with transparency support

## Icon Design Guidelines

- Use the app's primary color: #6366f1 (indigo)
- Include a fitness-related icon (dumbbell, weights, etc.)
- Ensure icons are readable at small sizes
- Use high contrast for visibility
- Support transparency (PNG with alpha channel)
- Follow platform guidelines for maskable icons

## Quick Solution

If you need icons quickly, you can:

1. Use a free icon from [Flaticon](https://www.flaticon.com/) or [Icons8](https://icons8.com/)
2. Search for "dumbbell" or "fitness" icons
3. Download in PNG format
4. Resize to 192x192 and 512x512
5. Place in this folder

## Testing

After adding icons:

1. Clear browser cache
2. Open the app
3. Check if icons appear in:
   - Browser tab (favicon)
   - PWA installation prompt
   - Home screen (when installed)
   - App launcher

## Notes

- Icons must be in PNG format
- Icons should be square (same width and height)
- Icons should have transparent backgrounds (for best results)
- For maskable icons, ensure important content is within the safe zone (80% of the icon)

