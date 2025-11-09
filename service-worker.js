/**
 * Service Worker for Fitness Tracker PWA
 * Handles caching, offline support, and asset management
 */

const CACHE_NAME = 'fitness-tracker-v1';
const RUNTIME_CACHE = 'fitness-tracker-runtime-v1';

// Assets to cache on install
const STATIC_ASSETS = [
    './',
    './index.html',
    './plans.html',
    './custom.html',
    './progress.html',
    './offline.html',
    './css/style.css',
    './js/main.js',
    './js/workouts.js',
    './js/charts.js',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// Optional assets (icons - may not exist initially)
const OPTIONAL_ASSETS = [
    './icons/icon-192.png',
    './icons/icon-512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching static assets');
                // Cache required assets
                return cache.addAll(STATIC_ASSETS.map(url => {
                    try {
                        return new Request(url, { mode: 'no-cors' });
                    } catch (e) {
                        return url;
                    }
                })).then(() => {
                    // Try to cache optional assets (icons)
                    return Promise.allSettled(
                        OPTIONAL_ASSETS.map(url => {
                            return fetch(url)
                                .then(response => {
                                    if (response.ok) {
                                        return cache.put(url, response);
                                    }
                                })
                                .catch(() => {
                                    // Icon not found, that's okay
                                    console.log('Service Worker: Icon not found (optional):', url);
                                });
                        })
                    );
                }).catch((error) => {
                    console.log('Service Worker: Cache failed', error);
                    // Continue even if some assets fail to cache
                    return Promise.resolve();
                });
            })
            .then(() => {
                console.log('Service Worker: Installed');
                return self.skipWaiting(); // Activate immediately
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        // Delete old caches
                        if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                            console.log('Service Worker: Deleting old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activated');
                return self.clients.claim(); // Take control of all pages
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http requests
    if (!event.request.url.startsWith('http')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached version if available
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Otherwise, fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        // Cache the response
                        caches.open(RUNTIME_CACHE)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch((error) => {
                        console.log('Service Worker: Fetch failed', error);
                        
                        // If it's a navigation request, return offline page
                        if (event.request.mode === 'navigate') {
                            return caches.match('./offline.html');
                        }
                        
                        // For other requests, return a basic offline response
                        return new Response('Offline', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    });
            })
    );
});

// Message event - handle messages from the app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CACHE_URLS') {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.addAll(event.data.urls);
                })
        );
    }
});

// Background sync (optional - for future use)
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Perform background sync operations
            Promise.resolve()
        );
    }
});

// Push notifications (optional - for future use)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New workout reminder!',
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        vibrate: [200, 100, 200],
        tag: 'workout-reminder'
    };

    event.waitUntil(
        self.registration.showNotification('Fitness Tracker', options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow('/index.html')
    );
});

