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
        mobileMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });
}

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

// Form Submission
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function(e) {

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