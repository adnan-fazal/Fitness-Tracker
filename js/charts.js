/**
 * Charts and Progress Visualization
 * Uses Chart.js for displaying progress data
 */

let workoutsChart = null;
let caloriesChart = null;
let exerciseChart = null;

/**
 * Initialize all charts with animations
 */
function loadCharts() {
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded');
        return;
    }

    if (typeof WorkoutData === 'undefined') {
        console.error('WorkoutData is not loaded');
        return;
    }

    // Delay chart loading for smooth page transition
    setTimeout(() => {
        loadWorkoutsChart();
        loadCaloriesChart();
        loadExerciseChart();
    }, 300);
}

/**
 * Load workouts completion chart
 */
function loadWorkoutsChart() {
    const ctx = document.getElementById('workoutsChart');
    if (!ctx) return;

    const weeklyProgress = WorkoutData.getWeeklyProgress();
    const dayStats = weeklyProgress.dayStats;
    
    // Get day names for the week
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    
    const labels = [];
    const data = [];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateKey = date.toISOString().split('T')[0];
        const dayName = DateUtils.getDayName(date.getDay()).substring(0, 3);
        
        labels.push(dayName);
        data.push(dayStats[dateKey] ? dayStats[dateKey].completed : 0);
    }

    // Destroy existing chart if it exists
    if (workoutsChart) {
        workoutsChart.destroy();
    }

    workoutsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Completed Workouts',
                data: data,
                backgroundColor: 'rgba(99, 102, 241, 0.8)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y} workouts completed`;
                        }
                    },
                    animation: {
                        duration: 300
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        color: 'var(--text-secondary)'
                    },
                    grid: {
                        color: 'var(--border-color)'
                    },
                    animation: {
                        duration: 2000
                    }
                },
                x: {
                    ticks: {
                        color: 'var(--text-secondary)'
                    },
                    grid: {
                        display: false
                    },
                    animation: {
                        duration: 2000
                    }
                }
            }
        }
    });
}

/**
 * Load calories burned chart
 */
function loadCaloriesChart() {
    const ctx = document.getElementById('caloriesChart');
    if (!ctx) return;

    const weeklyProgress = WorkoutData.getWeeklyProgress();
    const dayStats = weeklyProgress.dayStats;
    
    // Get day names for the week
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    
    const labels = [];
    const data = [];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateKey = date.toISOString().split('T')[0];
        const dayName = DateUtils.getDayName(date.getDay()).substring(0, 3);
        
        labels.push(dayName);
        data.push(dayStats[dateKey] ? dayStats[dateKey].calories : 0);
    }

    // Destroy existing chart if it exists
    if (caloriesChart) {
        caloriesChart.destroy();
    }

    caloriesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Calories Burned',
                data: data,
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderColor: 'rgba(245, 158, 11, 1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgba(245, 158, 11, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y} calories burned`;
                        }
                    },
                    animation: {
                        duration: 300
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'var(--text-secondary)',
                        callback: function(value) {
                            return value + ' cal';
                        }
                    },
                    grid: {
                        color: 'var(--border-color)'
                    },
                    animation: {
                        duration: 2000
                    }
                },
                x: {
                    ticks: {
                        color: 'var(--text-secondary)'
                    },
                    grid: {
                        display: false
                    },
                    animation: {
                        duration: 2000
                    }
                }
            }
        }
    });
}

/**
 * Load exercise frequency chart
 */
function loadExerciseChart() {
    const ctx = document.getElementById('exerciseChart');
    if (!ctx) return;

    const frequency = WorkoutData.getExerciseFrequency(7);
    
    if (frequency.length === 0) {
        ctx.parentElement.innerHTML = '<p class="empty-state">No exercise data available for this week.</p>';
        return;
    }

    const labels = frequency.map(item => item.name);
    const data = frequency.map(item => item.count);

    // Destroy existing chart if it exists
    if (exerciseChart) {
        exerciseChart.destroy();
    }

    exerciseChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Exercise Frequency',
                data: data,
                backgroundColor: [
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(14, 165, 233, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(251, 191, 36, 0.8)'
                ],
                borderColor: [
                    'rgba(99, 102, 241, 1)',
                    'rgba(139, 92, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(236, 72, 153, 1)',
                    'rgba(14, 165, 233, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(251, 191, 36, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart',
                animateRotate: true,
                animateScale: true
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: 'var(--text-primary)',
                        padding: 15,
                        font: {
                            size: 12
                        },
                        usePointStyle: true
                    },
                    animation: {
                        duration: 2000
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} times (${percentage}%)`;
                        }
                    },
                    animation: {
                        duration: 300
                    }
                }
            }
        }
    });
}

/**
 * Update all charts (call this when data changes)
 */
function updateCharts() {
    loadCharts();
}

// Export functions
window.loadCharts = loadCharts;
window.updateCharts = updateCharts;

