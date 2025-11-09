<<<<<<< HEAD
# Fitness & Workout Tracker PWA

A modern, responsive Progressive Web App (PWA) for tracking workouts and fitness progress. Built with vanilla HTML, CSS, and JavaScript.

## Features

- 🏋️ **Workout Plans**: Pre-built 7-day workout plans (Upper Body, Lower Body, Cardio, Core, Full Body, Flexibility, Rest Day)
- 📊 **Progress Tracking**: Visual charts showing completed workouts, calories burned, and exercise frequency
- ✏️ **Custom Workouts**: Create and manage your own custom exercises
- 📱 **PWA Support**: Installable on Android and iOS with offline functionality
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- 💾 **Offline Support**: Full functionality works offline using service workers
- 📈 **Real-time Stats**: Track daily and weekly progress with visual indicators
- 🎯 **Goal Tracking**: Monitor your fitness goals and achievements

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A web server (for local development) or deploy to Vercel/Netlify

### Installation

1. Clone or download this repository
2. Generate PWA icons (see [Icons Setup](#icons-setup))
3. Serve the files using a web server

### Local Development

#### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js
```bash
# Install http-server
npm install -g http-server

# Run server
http-server -p 8000
```

#### Using PHP
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Icons Setup

The app requires PWA icons for installation. To generate them:

1. **Option 1: Use the HTML Generator (Recommended)**
   - Open `icons/icon-generator.html` in your browser
   - Click "Generate Icons"
   - Download the generated icons as `icon-192.png` and `icon-512.png`
   - Place them in the `icons/` folder

2. **Option 2: Use Online Tools**
   - Visit [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/)
   - Upload a 512x512 fitness-themed image
   - Generate and download all required sizes
   - Place icons in the `icons/` folder

3. **Option 3: Create Manually**
   - Create 192x192 and 512x512 PNG images
   - Use a fitness theme (dumbbell, weights, etc.)
   - Place in the `icons/` folder

See `icons/README.md` for more details.

## Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Follow the prompts

Or drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop).

### Manual Deployment

1. Upload all files to your web server
2. Ensure HTTPS is enabled (required for PWA)
3. Access the app via HTTPS URL

## Project Structure

```
fitness-tracker/
├── index.html          # Dashboard (Today's plan + progress)
├── plans.html          # Weekly workout plans
├── custom.html         # Custom workouts management
├── progress.html       # Charts & progress tracking
├── offline.html        # Offline fallback page
├── manifest.json       # PWA manifest
├── service-worker.js   # Service worker for caching
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── main.js         # Core app logic
│   ├── workouts.js     # Workout data management
│   └── charts.js       # Progress charts
├── icons/
│   ├── icon-192.png    # PWA icon 192x192
│   ├── icon-512.png    # PWA icon 512x512
│   └── favicon.ico     # Favicon
├── vercel.json         # Vercel deployment config
└── netlify.toml        # Netlify deployment config
```

## Usage

### Dashboard
- View today's workout plan
- See daily progress and stats
- Check weekly goals
- Read motivational quotes

### Workout Plans
- Browse 7-day workout plans
- Mark exercises as completed
- View exercise details (sets, reps, calories)
- Add workouts to today's plan

### Custom Workouts
- Create custom exercises
- Add sets, reps, duration, and calories
- Edit or delete custom workouts
- All stored locally in your browser

### Progress Tracking
- View completed workouts chart
- See weekly calories burned
- Check exercise frequency
- Review recent activity

## PWA Features

### Installation

#### Android
1. Open the app in Chrome
2. Tap the menu (3 dots)
3. Select "Add to Home screen" or "Install app"
4. The app will appear on your home screen

#### iOS
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. The app will appear on your home screen

### Offline Support
- All pages are cached for offline access
- Workout data is stored in localStorage
- Full functionality works without internet
- Service worker handles caching automatically

## Browser Support

- Chrome (recommended)
- Firefox
- Safari (iOS 11.3+)
- Edge
- Opera

## Data Storage

All data is stored locally in your browser using:
- **localStorage**: Workout data, progress, custom workouts, user preferences
- **Cache API**: Static assets (HTML, CSS, JS, icons) for offline access

No data is sent to any server. All data remains on your device.

## Customization

### Themes
- Toggle between dark and light mode
- Theme preference is saved in localStorage
- Automatically detects system preference

### Workouts
- Modify sample workouts in `js/workouts.js`
- Add your own exercises via the Custom Workouts page
- All changes are stored locally

### Colors
- Primary color: `#6366f1` (indigo)
- Modify CSS variables in `css/style.css` to change colors

## Troubleshooting

### Service Worker Not Working
- Ensure you're accessing the app via HTTPS (or localhost)
- Clear browser cache and reload
- Check browser console for errors

### Icons Not Showing
- Verify icon files exist in `icons/` folder
- Check `manifest.json` icon paths
- Clear browser cache

### Offline Mode Not Working
- Check if service worker is registered (DevTools > Application > Service Workers)
- Verify service worker file is accessible
- Clear cache and re-register service worker

### Charts Not Loading
- Ensure Chart.js CDN is accessible
- Check browser console for errors
- Verify internet connection (for initial load)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.

## Acknowledgments

- Chart.js for progress visualization
- Service Worker API for offline support
- Modern CSS for responsive design

---

Made with 💪 for fitness enthusiasts

=======
# Fitness-Tracker
A Fitness Tracker web app
>>>>>>> d3d2cbc51c2fea899c59782e47fd711a238789fe
