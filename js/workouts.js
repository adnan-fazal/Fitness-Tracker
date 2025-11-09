/**
 * Workout Data Management
 * Handles workout data, localStorage operations, and workout management
 */

const WorkoutData = {
    // Sample workout data for 7 days
    sampleWorkouts: [
        {
            day: 1,
            name: "Upper Body",
            exercises: [
                {
                    name: "Push-ups",
                    sets: 3,
                    reps: "10-15",
                    calories: 50,
                    notes: "Focus on proper form"
                },
                {
                    name: "Pull-ups",
                    sets: 3,
                    reps: "8-12",
                    calories: 60,
                    notes: "Use assistance if needed"
                },
                {
                    name: "Bench Press",
                    sets: 4,
                    reps: "8-10",
                    calories: 80,
                    notes: "Warm up first"
                },
                {
                    name: "Shoulder Press",
                    sets: 3,
                    reps: "10-12",
                    calories: 70,
                    notes: "Keep core engaged"
                },
                {
                    name: "Bicep Curls",
                    sets: 3,
                    reps: "12-15",
                    calories: 40,
                    notes: "Control the movement"
                },
                {
                    name: "Tricep Dips",
                    sets: 3,
                    reps: "10-12",
                    calories: 45,
                    notes: "Use bench or chair"
                }
            ]
        },
        {
            day: 2,
            name: "Lower Body",
            exercises: [
                {
                    name: "Squats",
                    sets: 4,
                    reps: "12-15",
                    calories: 100,
                    notes: "Keep knees behind toes"
                },
                {
                    name: "Lunges",
                    sets: 3,
                    reps: "12 each leg",
                    calories: 80,
                    notes: "Alternate legs"
                },
                {
                    name: "Deadlifts",
                    sets: 4,
                    reps: "8-10",
                    calories: 120,
                    notes: "Maintain straight back"
                },
                {
                    name: "Leg Press",
                    sets: 3,
                    reps: "12-15",
                    calories: 90,
                    notes: "Full range of motion"
                },
                {
                    name: "Calf Raises",
                    sets: 3,
                    reps: "15-20",
                    calories: 40,
                    notes: "Slow and controlled"
                },
                {
                    name: "Leg Curls",
                    sets: 3,
                    reps: "12-15",
                    calories: 60,
                    notes: "Focus on hamstrings"
                }
            ]
        },
        {
            day: 3,
            name: "Cardio",
            exercises: [
                {
                    name: "Running",
                    sets: 1,
                    duration: "30 minutes",
                    calories: 300,
                    notes: "Moderate pace"
                },
                {
                    name: "Cycling",
                    sets: 1,
                    duration: "45 minutes",
                    calories: 350,
                    notes: "Outdoor or stationary"
                },
                {
                    name: "HIIT Training",
                    sets: 1,
                    duration: "20 minutes",
                    calories: 250,
                    notes: "High intensity intervals"
                },
                {
                    name: "Jump Rope",
                    sets: 5,
                    duration: "2 minutes each",
                    calories: 200,
                    notes: "Rest 30 sec between sets"
                },
                {
                    name: "Burpees",
                    sets: 3,
                    reps: "10-15",
                    calories: 150,
                    notes: "Full body exercise"
                }
            ]
        },
        {
            day: 4,
            name: "Core",
            exercises: [
                {
                    name: "Planks",
                    sets: 3,
                    duration: "60 seconds",
                    calories: 30,
                    notes: "Hold proper form"
                },
                {
                    name: "Crunches",
                    sets: 3,
                    reps: "20-25",
                    calories: 50,
                    notes: "Don't pull on neck"
                },
                {
                    name: "Russian Twists",
                    sets: 3,
                    reps: "20 each side",
                    calories: 40,
                    notes: "Keep back straight"
                },
                {
                    name: "Leg Raises",
                    sets: 3,
                    reps: "15-20",
                    calories: 45,
                    notes: "Control the movement"
                },
                {
                    name: "Mountain Climbers",
                    sets: 3,
                    duration: "30 seconds",
                    calories: 60,
                    notes: "Fast pace"
                },
                {
                    name: "Bicycle Crunches",
                    sets: 3,
                    reps: "20 each side",
                    calories: 50,
                    notes: "Slow and controlled"
                }
            ]
        },
        {
            day: 5,
            name: "Full Body",
            exercises: [
                {
                    name: "Squat to Press",
                    sets: 3,
                    reps: "12-15",
                    calories: 80,
                    notes: "Combination movement"
                },
                {
                    name: "Deadlift to Row",
                    sets: 3,
                    reps: "10-12",
                    calories: 90,
                    notes: "Full body engagement"
                },
                {
                    name: "Burpees",
                    sets: 3,
                    reps: "10-12",
                    calories: 150,
                    notes: "High intensity"
                },
                {
                    name: "Mountain Climbers",
                    sets: 3,
                    duration: "45 seconds",
                    calories: 70,
                    notes: "Fast pace"
                },
                {
                    name: "Kettlebell Swings",
                    sets: 3,
                    reps: "15-20",
                    calories: 100,
                    notes: "Hip drive"
                },
                {
                    name: "Jumping Jacks",
                    sets: 3,
                    reps: "30",
                    calories: 60,
                    notes: "Warm up movement"
                }
            ]
        },
        {
            day: 6,
            name: "Flexibility/Yoga",
            exercises: [
                {
                    name: "Sun Salutations",
                    sets: 3,
                    reps: "5 rounds",
                    calories: 50,
                    notes: "Flow movement"
                },
                {
                    name: "Warrior Poses",
                    sets: 2,
                    duration: "30 seconds each",
                    calories: 30,
                    notes: "Hold and breathe"
                },
                {
                    name: "Downward Dog",
                    sets: 3,
                    duration: "60 seconds",
                    calories: 20,
                    notes: "Stretch hamstrings"
                },
                {
                    name: "Child's Pose",
                    sets: 3,
                    duration: "60 seconds",
                    calories: 15,
                    notes: "Relaxation pose"
                },
                {
                    name: "Pigeon Pose",
                    sets: 2,
                    duration: "45 seconds each side",
                    calories: 25,
                    notes: "Hip opener"
                },
                {
                    name: "Seated Forward Fold",
                    sets: 3,
                    duration: "60 seconds",
                    calories: 20,
                    notes: "Hamstring stretch"
                }
            ]
        },
        {
            day: 7,
            name: "Rest Day",
            exercises: [
                {
                    name: "Light Stretching",
                    sets: 1,
                    duration: "15-20 minutes",
                    calories: 30,
                    notes: "Gentle stretches"
                },
                {
                    name: "Walking",
                    sets: 1,
                    duration: "30 minutes",
                    calories: 100,
                    notes: "Leisurely pace"
                },
                {
                    name: "Meditation",
                    sets: 1,
                    duration: "10-15 minutes",
                    calories: 10,
                    notes: "Mindfulness practice"
                }
            ]
        }
    ],

    /**
     * Initialize workout data in localStorage
     */
    init: function() {
        if (!localStorage.getItem('workouts')) {
            localStorage.setItem('workouts', JSON.stringify(this.sampleWorkouts));
        }
        if (!localStorage.getItem('completedExercises')) {
            localStorage.setItem('completedExercises', JSON.stringify({}));
        }
        if (!localStorage.getItem('customWorkouts')) {
            localStorage.setItem('customWorkouts', JSON.stringify([]));
        }
        if (!localStorage.getItem('workoutHistory')) {
            localStorage.setItem('workoutHistory', JSON.stringify([]));
        }
        if (!localStorage.getItem('userGoal')) {
            localStorage.setItem('userGoal', 'strength'); // default goal
        }
    },

    /**
     * Get all workouts
     */
    getWorkouts: function() {
        const workouts = localStorage.getItem('workouts');
        return workouts ? JSON.parse(workouts) : this.sampleWorkouts;
    },

    /**
     * Get workout by day
     */
    getWorkoutByDay: function(day) {
        const workouts = this.getWorkouts();
        return workouts.find(w => w.day === day);
    },

    /**
     * Get today's workout based on day of week
     */
    getTodayWorkout: function() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
        // Map Sunday (0) to Day 7, Monday (1) to Day 1, etc.
        const workoutDay = dayOfWeek === 0 ? 7 : dayOfWeek;
        return this.getWorkoutByDay(workoutDay);
    },

    /**
     * Get completed exercises
     */
    getCompletedExercises: function() {
        const completed = localStorage.getItem('completedExercises');
        return completed ? JSON.parse(completed) : {};
    },

    /**
     * Check if exercise is completed
     */
    isExerciseCompleted: function(day, exerciseIndex) {
        const completed = this.getCompletedExercises();
        const key = `${day}-${exerciseIndex}`;
        const dateKey = this.getDateKey();
        return completed[dateKey] && completed[dateKey][key] === true;
    },

    /**
     * Mark exercise as complete
     */
    markExerciseComplete: function(day, exerciseIndex) {
        const completed = this.getCompletedExercises();
        const dateKey = this.getDateKey();
        const key = `${day}-${exerciseIndex}`;
        
        if (!completed[dateKey]) {
            completed[dateKey] = {};
        }
        completed[dateKey][key] = true;
        
        localStorage.setItem('completedExercises', JSON.stringify(completed));
        this.updateWorkoutHistory(day, exerciseIndex, true);
    },

    /**
     * Toggle exercise completion
     */
    toggleExerciseCompletion: function(day, exerciseIndex) {
        const completed = this.getCompletedExercises();
        const dateKey = this.getDateKey();
        const key = `${day}-${exerciseIndex}`;
        
        if (!completed[dateKey]) {
            completed[dateKey] = {};
        }
        
        const isCompleted = completed[dateKey][key] === true;
        completed[dateKey][key] = !isCompleted;
        
        localStorage.setItem('completedExercises', JSON.stringify(completed));
        this.updateWorkoutHistory(day, exerciseIndex, !isCompleted);
    },

    /**
     * Update workout history
     */
    updateWorkoutHistory: function(day, exerciseIndex, completed) {
        const history = this.getWorkoutHistory();
        const dateKey = this.getDateKey();
        const workout = this.getWorkoutByDay(day);
        
        if (!workout) return;
        
        const exercise = workout.exercises[exerciseIndex];
        if (!exercise) return;
        
        const entry = {
            date: dateKey,
            day: day,
            exerciseIndex: exerciseIndex,
            exerciseName: exercise.name,
            calories: exercise.calories || 0,
            completed: completed,
            timestamp: new Date().toISOString()
        };
        
        history.push(entry);
        localStorage.setItem('workoutHistory', JSON.stringify(history));
    },

    /**
     * Get workout history
     */
    getWorkoutHistory: function() {
        const history = localStorage.getItem('workoutHistory');
        return history ? JSON.parse(history) : [];
    },

    /**
     * Get date key for today (YYYY-MM-DD)
     */
    getDateKey: function() {
        const today = new Date();
        return today.toISOString().split('T')[0];
    },

    /**
     * Get today's progress
     */
    getTodayProgress: function() {
        const completed = this.getCompletedExercises();
        const dateKey = this.getDateKey();
        const todayCompleted = completed[dateKey] || {};
        
        const totalCompleted = Object.values(todayCompleted).filter(v => v === true).length;
        const workout = this.getTodayWorkout();
        const totalExercises = workout ? workout.exercises.length : 0;
        
        // Calculate calories
        let calories = 0;
        if (workout) {
            workout.exercises.forEach((exercise, index) => {
                const key = `${workout.day}-${index}`;
                if (todayCompleted[key]) {
                    calories += exercise.calories || 0;
                }
            });
        }
        
        return {
            completed: totalCompleted,
            total: totalExercises,
            calories: calories,
            percentage: totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0
        };
    },

    /**
     * Get weekly progress
     */
    getWeeklyProgress: function() {
        const completed = this.getCompletedExercises();
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay()); // Start of week (Sunday)
        
        let weeklyCompleted = 0;
        let weeklyCalories = 0;
        let activeDays = 0;
        const dayStats = {};
        
        // Get stats for each day of the week
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateKey = date.toISOString().split('T')[0];
            
            const dayCompleted = completed[dateKey] || {};
            const dayCount = Object.values(dayCompleted).filter(v => v === true).length;
            
            if (dayCount > 0) {
                activeDays++;
                weeklyCompleted += dayCount;
            }
            
            // Calculate calories for this day
            const workoutDay = i === 0 ? 7 : i; // Sunday = 7, Monday = 1, etc.
            const workout = this.getWorkoutByDay(workoutDay);
            let dayCalories = 0;
            
            if (workout) {
                workout.exercises.forEach((exercise, index) => {
                    const key = `${workoutDay}-${index}`;
                    if (dayCompleted[key]) {
                        dayCalories += exercise.calories || 0;
                    }
                });
            }
            
            weeklyCalories += dayCalories;
            dayStats[dateKey] = {
                completed: dayCount,
                calories: dayCalories
            };
        }
        
        const totalWorkouts = this.getWorkouts().reduce((sum, w) => sum + w.exercises.length, 0);
        const completionRate = totalWorkouts > 0 ? Math.round((weeklyCompleted / (totalWorkouts * 7)) * 100) : 0;
        
        return {
            completed: weeklyCompleted,
            calories: weeklyCalories,
            activeDays: activeDays,
            completionRate: completionRate,
            dayStats: dayStats
        };
    },

    /**
     * Get custom workouts
     */
    getCustomWorkouts: function() {
        const custom = localStorage.getItem('customWorkouts');
        return custom ? JSON.parse(custom) : [];
    },

    /**
     * Add custom workout
     */
    addCustomWorkout: function(workout) {
        const custom = this.getCustomWorkouts();
        custom.push(workout);
        localStorage.setItem('customWorkouts', JSON.stringify(custom));
    },

    /**
     * Update custom workout
     */
    updateCustomWorkout: function(index, workout) {
        const custom = this.getCustomWorkouts();
        if (index >= 0 && index < custom.length) {
            custom[index] = workout;
            localStorage.setItem('customWorkouts', JSON.stringify(custom));
        }
    },

    /**
     * Delete custom workout
     */
    deleteCustomWorkout: function(index) {
        const custom = this.getCustomWorkouts();
        if (index >= 0 && index < custom.length) {
            custom.splice(index, 1);
            localStorage.setItem('customWorkouts', JSON.stringify(custom));
        }
    },

    /**
     * Clear all custom workouts
     */
    clearCustomWorkouts: function() {
        localStorage.setItem('customWorkouts', JSON.stringify([]));
    },

    /**
     * Add workout to today's plan
     */
    addWorkoutToToday: function(day) {
        // This could be expanded to merge workouts into today's plan
        // For now, we'll just track that user wants to do this workout today
        const todayPlan = localStorage.getItem('todayPlan') || '[]';
        const plan = JSON.parse(todayPlan);
        if (!plan.includes(day)) {
            plan.push(day);
            localStorage.setItem('todayPlan', JSON.stringify(plan));
        }
    },

    /**
     * Get user goal
     */
    getUserGoal: function() {
        return localStorage.getItem('userGoal') || 'strength';
    },

    /**
     * Set user goal
     */
    setUserGoal: function(goal) {
        localStorage.setItem('userGoal', goal);
    },

    /**
     * Get suggested workouts based on goal
     */
    getSuggestedWorkouts: function() {
        const goal = this.getUserGoal();
        const workouts = this.getWorkouts();
        
        // Filter workouts based on goal
        let suggested = [];
        
        switch(goal) {
            case 'strength':
                suggested = workouts.filter(w => 
                    w.name === 'Upper Body' || 
                    w.name === 'Lower Body' || 
                    w.name === 'Full Body'
                );
                break;
            case 'cardio':
                suggested = workouts.filter(w => w.name === 'Cardio');
                break;
            case 'flexibility':
                suggested = workouts.filter(w => w.name === 'Flexibility/Yoga');
                break;
            default:
                suggested = workouts.slice(0, 3);
        }
        
        return suggested.slice(0, 3); // Return top 3 suggestions
    },

    /**
     * Get exercise frequency (most performed exercises)
     */
    getExerciseFrequency: function(days = 7) {
        const history = this.getWorkoutHistory();
        const today = new Date();
        const cutoffDate = new Date(today);
        cutoffDate.setDate(today.getDate() - days);
        
        const frequency = {};
        
        history.forEach(entry => {
            const entryDate = new Date(entry.timestamp);
            if (entryDate >= cutoffDate && entry.completed) {
                const exerciseName = entry.exerciseName;
                frequency[exerciseName] = (frequency[exerciseName] || 0) + 1;
            }
        });
        
        // Sort by frequency and return top 10
        return Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([name, count]) => ({ name, count }));
    },

    /**
     * Get streak (consecutive days with workouts)
     */
    getStreak: function() {
        const completed = this.getCompletedExercises();
        const today = new Date();
        let streak = 0;
        let currentDate = new Date(today);
        
        // Check backwards from today
        while (true) {
            const dateKey = currentDate.toISOString().split('T')[0];
            const dayCompleted = completed[dateKey];
            
            if (dayCompleted && Object.values(dayCompleted).some(v => v === true)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        
        return streak;
    },

    /**
     * Get total workouts completed
     */
    getTotalWorkouts: function() {
        const history = this.getWorkoutHistory();
        return history.filter(entry => entry.completed).length;
    }
};

// Initialize on load
WorkoutData.init();

