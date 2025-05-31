// Kyoto Travel Guide Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initSmoothScrolling();
    initTimelineInteractions();
    initNavbarScroll();
    initMobileNavigation();
    initScrollHighlight();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation link
                updateActiveNavLink(this);
            }
        });
    });
}

// Timeline interactions - expand/collapse day details
function initTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        const details = item.querySelector('.timeline-details');
        
        content.addEventListener('click', function() {
            // Close other open items
            timelineItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherContent = otherItem.querySelector('.timeline-content');
                    const otherDetails = otherItem.querySelector('.timeline-details');
                    otherContent.classList.remove('active');
                    if (otherDetails) {
                        otherDetails.style.display = 'none';
                    }
                }
            });
            
            // Toggle current item
            this.classList.toggle('active');
            
            if (details) {
                if (this.classList.contains('active')) {
                    details.style.display = 'block';
                    // Smooth reveal animation
                    details.style.opacity = '0';
                    details.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        details.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                        details.style.opacity = '1';
                        details.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    details.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                    details.style.opacity = '0';
                    details.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        details.style.display = 'none';
                    }, 300);
                }
            }
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
        
        // Add hover effect
        content.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.2s ease-out';
            this.style.transform = 'translateX(5px)';
        });
        
        content.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(0)';
            }
        });
    });
}

// Navbar scroll effects
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Mobile navigation toggle
function initMobileNavigation() {
    // Create mobile menu button
    const navContainer = document.querySelector('.nav-container');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.cursor = 'pointer';
    mobileMenuBtn.style.color = 'var(--japan-red)';
    
    navContainer.appendChild(mobileMenuBtn);
    
    const navMenu = document.querySelector('.nav-menu');
    
    // Show/hide mobile button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 767) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
            navMenu.classList.remove('active');
        }
    }
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '☰';
        });
    });
    
    // Check screen size on load and resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}

// Highlight active navigation based on scroll position
function initScrollHighlight() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        const scrollPos = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    link.style.backgroundColor = '';
                    link.style.color = '';
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    activeLink.style.backgroundColor = 'rgba(188, 0, 45, 0.15)';
                    activeLink.style.color = 'var(--japan-red)';
                }
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(clickedLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.style.backgroundColor = '';
        link.style.color = '';
    });
    
    clickedLink.classList.add('active');
    clickedLink.style.backgroundColor = 'rgba(188, 0, 45, 0.15)';
    clickedLink.style.color = 'var(--japan-red)';
}

// Add card hover animations
function initCardAnimations() {
    const cards = document.querySelectorAll('.overview-card, .hotel-card, .restaurant-card, .transport-card, .tip-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease-out';
        });
    });
}

// Initialize card animations
document.addEventListener('DOMContentLoaded', function() {
    initCardAnimations();
});

// Add intersection observer for fade-in animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('.section, .overview-card, .timeline-item, .hotel-card, .restaurant-card, .transport-card, .tip-card');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
}

// Initialize scroll animations after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay the animation initialization to ensure all styles are loaded
    setTimeout(initScrollAnimations, 500);
});

// Add budget breakdown hover effects
function initBudgetInteractions() {
    const budgetItems = document.querySelectorAll('.budget-item');
    
    budgetItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(188, 0, 45, 0.05)';
            this.style.borderRadius = 'var(--radius-base)';
            this.style.padding = 'var(--space-12) var(--space-8)';
            this.style.margin = '0 calc(-1 * var(--space-8))';
            this.style.transition = 'all 0.2s ease-out';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.borderRadius = '';
            this.style.padding = 'var(--space-12) 0';
            this.style.margin = '';
        });
    });
}

// Initialize budget interactions
document.addEventListener('DOMContentLoaded', function() {
    initBudgetInteractions();
});

// Add loading animation for images
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease-out';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', function() {
    initImageLoading();
});