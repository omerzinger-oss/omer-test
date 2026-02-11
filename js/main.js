/* ============================================
   OMER ZINGER — PORTFOLIO
   Main JavaScript — Interactions & Animations
   ============================================ */

(function () {
    'use strict';

    // --- Custom Cursor ---
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    if (window.matchMedia('(hover: hover)').matches && cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.12;
            followerY += (mouseY - followerY) * 0.12;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Hover effect on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, .project, .skill-card');
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', () => follower.classList.add('is-hovering'));
            el.addEventListener('mouseleave', () => follower.classList.remove('is-hovering'));
        });
    }

    // --- Navigation Scroll Effect ---
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.scrollY;
        if (currentScroll > 80) {
            nav.classList.add('is-scrolled');
        } else {
            nav.classList.remove('is-scrolled');
        }
        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Mobile Menu ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
            document.body.style.overflow = mobileMenu.classList.contains('is-active') ? 'hidden' : '';
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('.mobile-menu__link').forEach((link) => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('is-active');
                mobileMenu.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Scroll Animations (Intersection Observer) ---
    const animateElements = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.getAttribute('data-delay') || 0;
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, parseInt(delay, 10));
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -60px 0px',
            }
        );

        animateElements.forEach((el) => observer.observe(el));
    } else {
        // Fallback: show all
        animateElements.forEach((el) => el.classList.add('is-visible'));
    }

    // --- Counter Animation ---
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            const duration = 2000;
            const start = performance.now();

            function updateCounter(timestamp) {
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quart
                const eased = 1 - Math.pow(1 - progress, 4);
                const current = Math.round(eased * target);
                counter.textContent = current;
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            // Only animate when visible
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            requestAnimationFrame(updateCounter);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 }
            );
            observer.observe(counter);
        });
    }
    animateCounters();

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // --- Parallax on Project Images ---
    const projects = document.querySelectorAll('.project__image-wrapper');

    function handleParallax() {
        projects.forEach((wrapper) => {
            const rect = wrapper.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            if (rect.top < viewHeight && rect.bottom > 0) {
                const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
                const translateY = (progress - 0.5) * 20;
                const image = wrapper.querySelector('.project__image');
                if (image) {
                    image.style.transform = `translateY(${translateY}px)`;
                }
            }
        });
    }

    window.addEventListener('scroll', handleParallax, { passive: true });

    // --- Page Load Animation ---
    window.addEventListener('load', () => {
        document.body.classList.add('is-loaded');
    });
})();
