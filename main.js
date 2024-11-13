/* elements */
const mainNav = document.getElementById('nav-header');
const stickyNav = document.getElementById('sticky-nav');

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // If main nav is out of view, show sticky nav
      if (!entry.isIntersecting) {
        stickyNav.style.display = 'block';
      } else {
        // If main nav is in view, hide sticky nav
        stickyNav.style.display = 'none';
      }
    });
  },
  { threshold: 0 } // Trigger when any part of the main nav is out of view
);

// Observe the main navigation
observer.observe(mainNav);
