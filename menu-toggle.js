/* ========================================= 
   HAMBURGER MENU TOGGLE FUNCTIONALITY
   Mobile-Responsive Navigation
   
   Purpose: 
   - Enables/disables hamburger menu on mobile screens
   - Toggles nav visibility when hamburger is clicked
   - Closes menu when a link is clicked
   - Closes menu when clicking outside the header
   
   Used by: All HTML pages (loaded via <script src="menu-toggle.js">)
   Called after: global-header.html is loaded dynamically
   ========================================= */

// Hamburger menu functionality - works across all pages
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.getElementById('main-nav');

    if (!hamburger || !nav) return;  // Exit if elements not found

    // Toggle menu visibility and hamburger animation on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');  // Animates hamburger to X
        nav.classList.toggle('active');        // Shows/hides the menu
    });

    // Close menu when a nav link is clicked (better UX for mobile)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close menu when clicking outside the header (optional, improves UX)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('header')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}
