/* elements */
const mainNav = document.getElementById('nav-header');
const stickyNav = document.getElementById('sticky-nav');
const settings = document.getElementById('settings-switch');

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
let useSettings = true;

function showAccessibilitySettings(){
    settingsOpen = true;
    document.getElementById('settings').style.display = 'flex';
    settings.focus();
}

function closeSettings(){
    settingsOpen = false;
    document.getElementById('settings').style.display = 'none';
}

settings.addEventListener('change', function(){
    useSettings = settings.checked;
    settings.setAttribute('aria-checked', settings.checked);
})

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
        if(settingsOpen){
            document.getElementById('settings').style.display = 'none';
        }
    }
    if(useSettings){
        if(e.key == "t"){
            console.log("scrolled");
            window.scrollTo(0, 0)
        };
        if(e.key == "o"){
            showAccessibilitySettings();
        }
    }
})