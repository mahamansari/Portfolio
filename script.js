// script.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Check if target element exists
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scroll effect
            });
        } else {
            console.error(`Element with ID ${this.getAttribute('href')} not found.`);
        }
    });
});
