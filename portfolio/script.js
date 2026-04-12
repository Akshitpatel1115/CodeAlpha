// Scroll Reveal Animation
const revealSections = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealSections);
revealSections(); // Run once on load

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu li a");

if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = mobileMenu.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });
}

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileMenu.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    });
});

// Form Submission
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields!");
            return;
        }

        alert("Message Sent Successfully!");
        form.reset();
    });
}