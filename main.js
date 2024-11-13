/* elements */
const mainNav = document.getElementById('nav-header');
const stickyNav = document.getElementById('sticky-nav');

console.log(mainNav, stickyNav);
// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    console.log("Observer");
    entries.forEach((entry) => {
        console.log(entry.isIntersecting);
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


/* Accessibility Settings */
let settingsOpen = false;
function showAccessibilitySettings(){
    settingsOpen = true;
    document.getElementById('settings').style.display = 'fixed';
}

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
        if(settingsOpen){
            document.getElementById('settings').style.display = 'none';
        }
    }
})