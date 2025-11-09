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

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server for local development or deploy to Vercel/Netlify

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
Using Node.js
bash
Copy code
# Install http-server
npm install -g http-server

# Run server
http-server -p 8000
Using PHP
bash
Copy code
php -S localhost:8000
Then open http://localhost:8000 in your browser.

Icons Setup
The app requires PWA icons for installation. To generate them:

Use an icon generator (RealFaviconGenerator or Favicon.io)

Place 192x192 and 512x512 icons in the icons/ folder

Deployment
Vercel: npm i -g vercel → vercel → follow prompts

Netlify: npm i -g netlify-cli → netlify deploy --prod

Or drag & drop folder to Netlify Drop

Project Structure
bash
Copy code
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
│   ├── icon-192.png
│   ├── icon-512.png
│   └── favicon.ico
├── vercel.json
└── netlify.toml
Usage
View today's workout plan

Mark exercises as completed

Track weekly progress

Add custom workouts

PWA Features
Installable on Android/iOS

Offline functionality via service worker

Dark/Light mode toggle

Data Storage
localStorage: Workout data, progress, custom workouts, user preferences

Cache API: Static assets for offline use

Browser Support
Chrome, Firefox, Safari, Edge, Opera

License
MIT License

Contributing
Contributions welcome! Submit Pull Requests.

Support
Open an issue on GitHub.

Made with 💪 for fitness enthusiasts

yaml
Copy code

---

## **Step 2: Resolve merge and commit in Git**

1. **Save the above README** in `README.md` (replace the conflict content).  
2. Stage the file:

```bash
git add README.md