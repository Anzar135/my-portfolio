/* ==========================================================================
   ANZAR HAIDER - PORTFOLIO JAVASCRIPT
   ==========================================================================
   Table of Contents:
   1.  Loading Screen
   2.  Header Scroll Effect
   3.  Mobile Menu Toggle
   4.  Active Navigation Link
   5.  Scroll Progress Bar
   6.  Scroll To Top Button
   7.  Typing Animation (Hero Section)
   8.  Scroll Reveal Animations
   9.  Project Search & Filter (Projects Page)
   10. Contact Form (EmailJS)
   11. Initialize All Functions
   ========================================================================== */


/* ==========================================================================
   1. LOADING SCREEN
   ========================================================================== */

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');

    if (loader) {
        // Wait 1.5 seconds then hide the loader
        setTimeout(function () {
            loader.classList.add('hidden');
        }, 1500);
    }
});


/* ==========================================================================
   2. HEADER SCROLL EFFECT
   ========================================================================== */

const header = document.getElementById('header');

function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleHeaderScroll);


/* ==========================================================================
   3. MOBILE MENU TOGGLE
   ========================================================================== */

const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

if (menuIcon && navbar) {

    // Open / close menu when icon is clicked
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });

    // Close menu when a nav link is clicked
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
}


/* ==========================================================================
   4. ACTIVE NAVIGATION LINK
   ========================================================================== */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

function setActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);


/* ==========================================================================
   5. SCROLL PROGRESS BAR
   ========================================================================== */

const scrollProgress = document.getElementById('scroll-progress');

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / documentHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.width = progress + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);


/* ==========================================================================
   6. SCROLL TO TOP BUTTON
   ========================================================================== */

const scrollTopBtn = document.getElementById('scroll-top');

function handleScrollTopButton() {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
}

if (scrollTopBtn) {
    window.addEventListener('scroll', handleScrollTopButton);

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


/* ==========================================================================
   7. TYPING ANIMATION (HERO SECTION)
   ========================================================================== */

const typingText = document.querySelector('.text-animation span');

if (typingText) {

    const roles = [
        'Full Stack Developer',
        'Programmer',
        'Frontend Developer',
        'Backend Developer',
        'Web Developer'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeRole() {

        const currentRole = roles[roleIndex];

        // Typing forward
        if (!isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;

            // If word is fully typed, pause then start deleting
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeRole, 2000);
                return;
            }

            setTimeout(typeRole, 100);
        }
        // Deleting backward
        else {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;

            // If word is fully deleted, move to next word
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 500);
                return;
            }

            setTimeout(typeRole, 50);
        }
    }

    // Start the typing animation
    typeRole();
}


/* ==========================================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================================== */

// Add reveal class to elements we want to animate
function setupRevealElements() {
    const elementsToReveal = document.querySelectorAll(
        '.section-header, .home-content, .home-img, .about-img, .about-content, ' +
        '.skill-category-card, .timeline-item, .project-card, .contact-info, ' +
        '.contact-form-wrapper, .education-card, .soft-skill-card, .hobby-item, ' +
        '.stat-item, .contact-method-card, .contact-form-card, .about-intro-text, ' +
        '.skill-group, .cta-content, .page-hero-content'
    );

    elementsToReveal.forEach(function (element) {
        element.classList.add('reveal');
    });
}

// Observe elements and add active class when they enter viewport
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });
}


/* ==========================================================================
   9. PROJECT SEARCH & FILTER (PROJECTS PAGE)
   ========================================================================== */

const searchInput = document.getElementById('project-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.all-projects .project-card');
const noResults = document.getElementById('no-results');
const countNumber = document.getElementById('count-number');

let currentFilter = 'all';
let currentSearch = '';

// Filter projects by category
function filterProjects() {
    let visibleCount = 0;

    projectCards.forEach(function (card) {
        const cardCategory = card.getAttribute('data-category') || '';
        const cardTitle = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
        const cardDesc = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';

        const matchesFilter = currentFilter === 'all' || cardCategory.includes(currentFilter);
        const matchesSearch = currentSearch === '' || cardTitle.includes(currentSearch) || cardDesc.includes(currentSearch);

        if (matchesFilter && matchesSearch) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Update count display
    if (countNumber) {
        countNumber.textContent = visibleCount;
    }

    // Show / hide no results message
    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
}

// Search input event
if (searchInput) {
    searchInput.addEventListener('input', function () {
        currentSearch = searchInput.value.toLowerCase().trim();
        filterProjects();
    });
}

// Filter button events
filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        // Add active class to clicked button
        button.classList.add('active');

        // Update current filter
        currentFilter = button.getAttribute('data-filter');
        filterProjects();
    });
});


/* ==========================================================================
   10. CONTACT FORM (EMAILJS)
   ========================================================================== */

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

if (contactForm) {

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.querySelector('span').textContent = 'Sending...';
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        // Get form data
        const formData = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            phone: document.getElementById('contact-phone').value,
            subject: document.getElementById('contact-subject').value,
            message: document.getElementById('contact-message').value
        };

        // Try to send via EmailJS
        // NOTE: Replace these with your actual EmailJS credentials
        if (typeof emailjs !== 'undefined' && emailjs.init) {
            try {
                emailjs.init('YOUR_PUBLIC_KEY');

                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                    .then(function (response) {
                        // Success
                        formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                        formStatus.classList.add('success');
                        contactForm.reset();
                    })
                    .catch(function (error) {
                        // Error
                        formStatus.textContent = 'Something went wrong. Please try again or email me directly.';
                        formStatus.classList.add('error');
                        console.error('EmailJS error:', error);
                    })
                    .finally(function () {
                        submitBtn.classList.remove('loading');
                        submitBtn.querySelector('span').textContent = 'Send Message';
                    });
            } catch (error) {
                // Fallback if EmailJS is not configured
                showFallbackMessage();
            }
        } else {
            // Fallback if EmailJS library is not loaded
            showFallbackMessage();
        }
    });

    // Fallback message when EmailJS is not configured
    function showFallbackMessage() {
        formStatus.textContent = 'Thank you for your message! Please email me directly at anzarhaider135@gmail.com.';
        formStatus.classList.add('success');
        contactForm.reset();
        submitBtn.classList.remove('loading');
        submitBtn.querySelector('span').textContent = 'Send Message';
    }
}


/* ==========================================================================
   11. INITIALIZE ALL FUNCTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Setup reveal elements and start observing
    setupRevealElements();
    initScrollReveal();

    // Initialize scroll-related functions
    handleHeaderScroll();
    updateScrollProgress();
    handleScrollTopButton();
    setActiveLink();

    // Initialize project filter if on projects page
    if (projectCards.length > 0) {
        filterProjects();
    }
});
