# Quick Start Guide

## Getting Started in 3 Steps

### 1. Generate Icons (Required)

The app needs PWA icons to work properly. Choose one method:

**Option A: Use the HTML Generator (Easiest)**
1. Open `icons/icon-generator.html` in your browser
2. Click "Generate Icons" button
3. Click "Download 192x192" and save as `icons/icon-192.png`
4. Click "Download 512x512" and save as `icons/icon-512.png`

**Option B: Use Online Tool**
1. Go to https://realfavicongenerator.net/
2. Upload a 512x512 fitness-themed image
3. Download generated icons
4. Place `android-chrome-192x192.png` as `icons/icon-192.png`
5. Place `android-chrome-512x512.png` as `icons/icon-512.png`

### 2. Start Local Server

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

### 3. Open in Browser

Open `http://localhost:8000` in your browser.

## Testing PWA Features

### Install the App
- **Chrome/Edge**: Click the install icon in the address bar
- **Firefox**: Menu > Install
- **Safari (iOS)**: Share > Add to Home Screen

### Test Offline Mode
1. Open DevTools (F12)
2. Go to Network tab
3. Check "Offline"
4. Reload the page
5. App should still work!

## Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

Or drag and drop the folder to https://app.netlify.com/drop

## Features to Try

1. **Dashboard**: View today's workout and progress
2. **Workout Plans**: Browse 7-day workout plans
3. **Custom Workouts**: Create your own exercises
4. **Progress**: View charts and statistics
5. **Dark Mode**: Toggle theme in navigation
6. **Offline**: Disconnect internet and test offline mode

## Troubleshooting

**Icons not showing?**
- Make sure icon files exist in `icons/` folder
- Check file names: `icon-192.png` and `icon-512.png`
- Clear browser cache

**Service worker not working?**
- Must use HTTPS or localhost
- Check browser console for errors
- Clear cache and reload

**Charts not loading?**
- Check internet connection (Chart.js from CDN)
- Verify Chart.js is loaded in browser console

## Next Steps

- Customize workout plans in `js/workouts.js`
- Modify colors in `css/style.css`
- Add your own exercises via the app
- Deploy to Vercel or Netlify for production

Enjoy your Fitness Tracker! 💪

