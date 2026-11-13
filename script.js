
// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Close menu after selecting a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// Automatically display the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form demonstration
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.textContent =
    "Thank you! This is a demonstration form. Please email me directly.";

  contactForm.reset();
});