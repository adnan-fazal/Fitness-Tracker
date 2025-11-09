/**
 * Modern Animations and Interactions
 * Enhanced animations for a modern, polished UI
 */

const AnimationManager = {
    /**
     * Initialize all animations
     */
    init: function() {
        this.observeElements();
        this.initScrollAnimations();
        this.initButtonAnimations();
        this.initProgressBarAnimations();
        this.initCardAnimations();
        this.initFormAnimations();
    },

    /**
     * Observe elements for intersection animations
     */
    observeElements: function() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe all cards and sections
            document.querySelectorAll('.workout-card, .progress-card, .stat-card, .exercise-card, .chart-card, .summary-card').forEach(el => {
                observer.observe(el);
            });
        }
    },

    /**
     * Initialize scroll animations
     */
    initScrollAnimations: function() {
        let lastScroll = 0;
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                navbar.classList.remove('scroll-up');
                return;
            }

            if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
                navbar.classList.remove('scroll-up');
                navbar.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
                navbar.classList.remove('scroll-down');
                navbar.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        });
    },

    /**
     * Initialize button animations
     */
    initButtonAnimations: function() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                // Ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    },

    /**
     * Animate progress bars on load
     */
    initProgressBarAnimations: function() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                        observer.unobserve(bar);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(bar);
        });
    },

    /**
     * Initialize card animations
     */
    initCardAnimations: function() {
        document.querySelectorAll('.workout-card, .exercise-card, .stat-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    },

    /**
     * Initialize form animations
     */
    initFormAnimations: function() {
        const inputs = document.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });

            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    },

    /**
     * Animate number counting
     */
    animateNumber: function(element, target, duration = 2000) {
        if (!element) return;
        
        const start = parseInt(element.textContent) || 0;
        const difference = target - start;
        if (difference === 0) return; // No animation needed
        
        const startTime = performance.now();
        const originalText = element.textContent;
        const hasSuffix = originalText.includes('%') || originalText.includes('days') || originalText.includes('cal');
        const suffix = hasSuffix ? (originalText.includes('%') ? '%' : originalText.includes('days') ? ' days' : ' cal') : '';

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (difference * easeOut));
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final value is set
                element.textContent = target + suffix;
            }
        };

        requestAnimationFrame(animate);
    },

    /**
     * Stagger animation for list items
     */
    staggerAnimation: function(selector, delay = 100) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.5s ease-out';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 50);
            }, index * delay);
        });
    },

    /**
     * Page transition animation
     */
    pageTransition: function() {
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        document.body.style.transition = 'all 0.5s ease-out';

        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        }, 50);
    }
};

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .navbar.scroll-down {
        transform: translateY(-100%);
        transition: transform 0.3s ease-out;
    }
    
    .navbar.scroll-up {
        transform: translateY(0);
        transition: transform 0.3s ease-out;
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .form-group.focused label {
        color: var(--primary-color);
        transform: translateY(-2px);
    }
`;
document.head.appendChild(rippleStyle);

// Initialize animations on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        AnimationManager.init();
        AnimationManager.pageTransition();
    });
} else {
    AnimationManager.init();
    AnimationManager.pageTransition();
}

// Export for global use
window.AnimationManager = AnimationManager;

