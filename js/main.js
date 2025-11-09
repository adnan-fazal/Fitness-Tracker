/**
 * Main Application Logic
 * Handles navigation, theme toggle, service worker registration, and utility functions
 */

// Theme Management
const ThemeManager = {
    /**
     * Initialize theme based on system preference or saved preference
     */
    init: function() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            this.setTheme(systemPrefersDark ? 'dark' : 'light');
        }
        
        // Update theme icon
        this.updateThemeIcon();
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    },

    /**
     * Set theme
     */
    setTheme: function(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    },

    /**
     * Toggle theme
     */
    toggle: function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    /**
     * Update theme toggle icon
     */
    updateThemeIcon: function() {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }
};

// Navigation Management
const NavigationManager = {
    /**
     * Initialize navigation
     */
    init: function() {
        this.setActiveLink();
        this.initMobileMenu();
    },

    /**
     * Set active navigation link based on current page
     */
    setActiveLink: function() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath.split('/').pop() || 
                (currentPath.includes('index.html') && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    },

    /**
     * Initialize mobile menu toggle
     */
    initMobileMenu: function() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                });
            });
        }
    }
};

// Service Worker Registration
const ServiceWorkerManager = {
    /**
     * Register service worker
     */
    register: function() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('./service-worker.js')
                    .then(function(registration) {
                        console.log('ServiceWorker registration successful:', registration.scope);
                        
                        // Check for updates
                        registration.addEventListener('updatefound', function() {
                            const newWorker = registration.installing;
                            newWorker.addEventListener('statechange', function() {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New service worker available
                                    console.log('New service worker available');
                                }
                            });
                        });
                    })
                    .catch(function(error) {
                        console.log('ServiceWorker registration failed:', error);
                    });
            });
            
            // Listen for service worker controller changes
            navigator.serviceWorker.addEventListener('controllerchange', function() {
                window.location.reload();
            });
        }
    }
};

// PWA Install Prompt
const InstallPromptManager = {
    deferredPrompt: null,
    
    /**
     * Initialize install prompt
     */
    init: function() {
        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return; // Already installed
        }
        
        // Listen for beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallPrompt();
        });
        
        // Listen for app installed event
        window.addEventListener('appinstalled', () => {
            console.log('PWA was installed');
            this.hideInstallPrompt();
            this.deferredPrompt = null;
        });
    },

    /**
     * Show install prompt
     */
    showInstallPrompt: function() {
        const installPrompt = document.getElementById('installPrompt');
        if (installPrompt && this.deferredPrompt) {
            installPrompt.style.display = 'block';
            
            const installBtn = document.getElementById('installBtn');
            const dismissBtn = document.getElementById('dismissInstall');
            
            if (installBtn) {
                installBtn.addEventListener('click', () => {
                    this.install();
                });
            }
            
            if (dismissBtn) {
                dismissBtn.addEventListener('click', () => {
                    this.hideInstallPrompt();
                });
            }
        }
    },

    /**
     * Hide install prompt
     */
    hideInstallPrompt: function() {
        const installPrompt = document.getElementById('installPrompt');
        if (installPrompt) {
            installPrompt.style.display = 'none';
        }
    },

    /**
     * Install PWA
     */
    install: function() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                this.deferredPrompt = null;
                this.hideInstallPrompt();
            });
        }
    }
};

// Date Utilities
const DateUtils = {
    /**
     * Format date to readable string
     */
    formatDate: function(date = new Date()) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    },

    /**
     * Get day name
     */
    getDayName: function(dayIndex) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayIndex];
    },

    /**
     * Get date key (YYYY-MM-DD)
     */
    getDateKey: function(date = new Date()) {
        return date.toISOString().split('T')[0];
    }
};

// Motivational Quotes
const MotivationalQuotes = {
    quotes: [
        "The only bad workout is the one that didn't happen.",
        "Your body can do it. It's your mind you need to convince.",
        "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
        "Take care of your body. It's the only place you have to live.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Don't stop when you're tired. Stop when you're done.",
        "The only way to do great work is to love what you do.",
        "Push yourself because no one else is going to do it for you.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Your limitation—it's only your imagination.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn't just find you. You have to go out and get it.",
        "The harder you work for something, the greater you'll feel when you achieve it."
    ],

    /**
     * Get random quote
     */
    getRandomQuote: function() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    },

    /**
     * Get quote for today (consistent based on date)
     */
    getTodayQuote: function() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const index = dayOfYear % this.quotes.length;
        return this.quotes[index];
    }
};

// Dashboard Functions
function updateDashboard() {
    if (typeof WorkoutData === 'undefined') {
        console.error('WorkoutData is not loaded');
        return;
    }

    // Update current date with animation
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        currentDateElement.style.opacity = '0';
        currentDateElement.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            currentDateElement.textContent = DateUtils.formatDate();
            currentDateElement.style.transition = 'all 0.5s ease-out';
            currentDateElement.style.opacity = '1';
            currentDateElement.style.transform = 'translateY(0)';
        }, 100);
    }

    // Update today's workout
    const todayWorkoutElement = document.getElementById('todayWorkout');
    if (todayWorkoutElement) {
        const workout = WorkoutData.getTodayWorkout();
        if (workout) {
            const progress = WorkoutData.getTodayProgress();
            todayWorkoutElement.innerHTML = `
                <div class="workout-card-header">
                    <h3 class="workout-day-title">${workout.name}</h3>
                    <span class="stat-badge">${workout.exercises.length} exercises</span>
                </div>
                <div class="workout-exercises-preview">
                    ${workout.exercises.slice(0, 3).map(exercise => {
                        const sets = exercise.sets ? `${exercise.sets} sets` : '';
                        const reps = exercise.reps || exercise.duration || '';
                        const detail = [sets, reps].filter(Boolean).join(' • ');
                        return `
                        <div class="exercise-preview">
                            <span class="exercise-name-small">${exercise.name}</span>
                            <span class="exercise-detail-small">${detail}</span>
                        </div>
                    `;
                    }).join('')}
                    ${workout.exercises.length > 3 ? `<p class="more-exercises">+${workout.exercises.length - 3} more exercises</p>` : ''}
                </div>
                <div class="workout-actions">
                    <a href="plans.html" class="btn btn-primary">View Full Plan</a>
                </div>
            `;
        } else {
            todayWorkoutElement.innerHTML = '<div class="empty-state">No workout planned for today.</div>';
        }
    }

    // Update today's progress with animations
    const progress = WorkoutData.getTodayProgress();
    
    const todayCompletedElement = document.getElementById('todayCompleted');
    const todayCompletedBarElement = document.getElementById('todayCompletedBar');
    if (todayCompletedElement && todayCompletedBarElement) {
        todayCompletedElement.textContent = `${progress.completed}/${progress.total}`;
        // Animate progress bar
        setTimeout(() => {
            todayCompletedBarElement.style.width = `${progress.percentage}%`;
        }, 200);
        
        // Animate number
        if (typeof AnimationManager !== 'undefined' && progress.completed > 0) {
            setTimeout(() => {
                const numberEl = document.createElement('span');
                numberEl.textContent = progress.completed;
                AnimationManager.animateNumber(numberEl, progress.completed, 1000);
            }, 300);
        }
    }

    const todayCaloriesElement = document.getElementById('todayCalories');
    const todayCaloriesBarElement = document.getElementById('todayCaloriesBar');
    if (todayCaloriesElement && todayCaloriesBarElement) {
        todayCaloriesElement.textContent = `${progress.calories} cal`;
        const maxCalories = 500; // Estimated max calories for a workout
        const caloriesPercentage = Math.min((progress.calories / maxCalories) * 100, 100);
        // Animate progress bar
        setTimeout(() => {
            todayCaloriesBarElement.style.width = `${caloriesPercentage}%`;
        }, 400);
    }

    // Update weekly progress with animations
    const weeklyProgress = WorkoutData.getWeeklyProgress();
    const weeklyProgressElement = document.getElementById('weeklyProgress');
    const weeklyProgressBarElement = document.getElementById('weeklyProgressBar');
    if (weeklyProgressElement && weeklyProgressBarElement) {
        weeklyProgressElement.textContent = `${weeklyProgress.completionRate}%`;
        // Animate progress bar
        setTimeout(() => {
            weeklyProgressBarElement.style.width = `${weeklyProgress.completionRate}%`;
        }, 600);
    }

    // Update quick stats with animations
    const totalWorkoutsElement = document.getElementById('totalWorkouts');
    if (totalWorkoutsElement) {
        const total = WorkoutData.getTotalWorkouts();
        if (typeof AnimationManager !== 'undefined') {
            totalWorkoutsElement.textContent = '0';
            setTimeout(() => {
                AnimationManager.animateNumber(totalWorkoutsElement, total, 1500);
            }, 800);
        } else {
            totalWorkoutsElement.textContent = total;
        }
    }

    const weekWorkoutsElement = document.getElementById('weekWorkouts');
    if (weekWorkoutsElement) {
        const weekTotal = weeklyProgress.activeDays;
        if (typeof AnimationManager !== 'undefined') {
            weekWorkoutsElement.textContent = '0';
            setTimeout(() => {
                AnimationManager.animateNumber(weekWorkoutsElement, weekTotal, 1500);
            }, 1000);
        } else {
            weekWorkoutsElement.textContent = weekTotal;
        }
    }

    const streakElement = document.getElementById('streak');
    if (streakElement) {
        const streak = WorkoutData.getStreak();
        if (typeof AnimationManager !== 'undefined') {
            streakElement.textContent = '0 days';
            setTimeout(() => {
                const numberEl = streakElement;
                const originalText = numberEl.textContent;
                numberEl.textContent = `${streak} days`;
                // Animate just the number part
                const tempEl = document.createElement('span');
                tempEl.textContent = streak;
                AnimationManager.animateNumber(tempEl, streak, 1500);
                numberEl.textContent = tempEl.textContent + ' days';
            }, 1200);
        } else {
            streakElement.textContent = `${streak} days`;
        }
    }

    const goalProgressElement = document.getElementById('goalProgress');
    if (goalProgressElement) {
        const goalRate = weeklyProgress.completionRate;
        if (typeof AnimationManager !== 'undefined') {
            goalProgressElement.textContent = '0%';
            setTimeout(() => {
                const numberEl = goalProgressElement;
                numberEl.textContent = `${goalRate}%`;
                // Animate just the number part
                const tempEl = document.createElement('span');
                tempEl.textContent = goalRate;
                AnimationManager.animateNumber(tempEl, goalRate, 1500);
                numberEl.textContent = tempEl.textContent + '%';
            }, 1400);
        } else {
            goalProgressElement.textContent = `${goalRate}%`;
        }
    }
}

function loadSuggestedWorkouts() {
    const suggestedWorkoutsElement = document.getElementById('suggestedWorkouts');
    if (!suggestedWorkoutsElement) return;

    const suggested = WorkoutData.getSuggestedWorkouts();
    if (suggested.length === 0) {
        suggestedWorkoutsElement.innerHTML = '<p class="empty-state">No suggested workouts available.</p>';
        return;
    }

    suggestedWorkoutsElement.innerHTML = suggested.map(workout => `
        <div class="suggested-workout-card" onclick="window.location.href='plans.html?day=${workout.day}'">
            <h3>${workout.name}</h3>
            <p>${workout.exercises.length} exercises</p>
            <button class="btn btn-secondary" style="margin-top: 1rem;">View Plan</button>
        </div>
    `).join('');
}

function updateProgressSummary() {
    if (typeof WorkoutData === 'undefined') return;

    const weeklyProgress = WorkoutData.getWeeklyProgress();
    
    const weeklyWorkoutsElement = document.getElementById('weeklyWorkouts');
    if (weeklyWorkoutsElement) {
        if (typeof AnimationManager !== 'undefined') {
            weeklyWorkoutsElement.textContent = '0';
            setTimeout(() => {
                AnimationManager.animateNumber(weeklyWorkoutsElement, weeklyProgress.activeDays, 1500);
            }, 300);
        } else {
            weeklyWorkoutsElement.textContent = weeklyProgress.activeDays;
        }
    }

    const totalCaloriesElement = document.getElementById('totalCalories');
    if (totalCaloriesElement) {
        if (typeof AnimationManager !== 'undefined') {
            totalCaloriesElement.textContent = '0';
            setTimeout(() => {
                AnimationManager.animateNumber(totalCaloriesElement, weeklyProgress.calories, 2000);
            }, 500);
        } else {
            totalCaloriesElement.textContent = weeklyProgress.calories;
        }
    }

    const completionRateElement = document.getElementById('completionRate');
    if (completionRateElement) {
        if (typeof AnimationManager !== 'undefined') {
            completionRateElement.textContent = '0%';
            setTimeout(() => {
                const rate = weeklyProgress.completionRate;
                const tempEl = document.createElement('span');
                tempEl.textContent = rate;
                AnimationManager.animateNumber(tempEl, rate, 1500);
                completionRateElement.textContent = tempEl.textContent + '%';
            }, 700);
        } else {
            completionRateElement.textContent = `${weeklyProgress.completionRate}%`;
        }
    }

    const activeDaysElement = document.getElementById('activeDays');
    if (activeDaysElement) {
        if (typeof AnimationManager !== 'undefined') {
            activeDaysElement.textContent = '0';
            setTimeout(() => {
                AnimationManager.animateNumber(activeDaysElement, weeklyProgress.activeDays, 1500);
            }, 900);
        } else {
            activeDaysElement.textContent = weeklyProgress.activeDays;
        }
    }
}

function loadRecentActivity() {
    const activityListElement = document.getElementById('activityList');
    if (!activityListElement) return;

    const history = WorkoutData.getWorkoutHistory();
    const recent = history
        .filter(entry => entry.completed)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 10);

    if (recent.length === 0) {
        activityListElement.innerHTML = '<div class="empty-state">No recent activity.</div>';
        return;
    }

    activityListElement.innerHTML = recent.map(entry => {
        const date = new Date(entry.timestamp);
        return `
            <div class="activity-item">
                <div class="activity-content">
                    <h4>${entry.exerciseName}</h4>
                    <p>${DateUtils.formatDate(date)} • ${entry.calories} cal</p>
                </div>
            </div>
        `;
    }).join('');
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    ThemeManager.init();
    
    // Initialize navigation
    NavigationManager.init();
    
    // Register service worker
    ServiceWorkerManager.register();
    
    // Initialize install prompt
    InstallPromptManager.init();
    
    // Update motivational quote
    const quoteElement = document.getElementById('motivationalQuote');
    if (quoteElement) {
        quoteElement.textContent = `"${MotivationalQuotes.getTodayQuote()}"`;
    }
    
    // Theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            ThemeManager.toggle();
        });
    }
});

// Export functions for global access
window.updateDashboard = updateDashboard;
window.loadSuggestedWorkouts = loadSuggestedWorkouts;
window.updateProgressSummary = updateProgressSummary;
window.loadRecentActivity = loadRecentActivity;

