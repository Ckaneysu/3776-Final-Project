// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});


// =====================================
// 2. PROJECT CATEGORY FILTERING
// =====================================

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        projectCards.forEach(function (card) {
            const matches =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.classList.toggle("hidden", !matches);
        });
    });
});


// =====================================
// 3. CONTACT FORM CLIENT-SIDE VALIDATION
// =====================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const feedback = document.getElementById("form-feedback");

    let isValid = true;

    [nameError, emailError, messageError].forEach(function (element) {
        element.textContent = "";
    });

    [name, email, message].forEach(function (field) {
        field.classList.remove("invalid");
        field.setAttribute("aria-invalid", "false");
    });

    if (name.value.trim().length < 2) {
        nameError.textContent = "Please enter your name (at least 2 characters).";
        name.classList.add("invalid");
        name.setAttribute("aria-invalid", "true");
        isValid = false;
    }

    if (email.value.trim() === "" || !email.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("invalid");
        email.setAttribute("aria-invalid", "true");
        isValid = false;
    }

    if (message.value.trim().length < 10) {
        messageError.textContent = "Please enter a message with at least 10 characters.";
        message.classList.add("invalid");
        message.setAttribute("aria-invalid", "true");
        isValid = false;
    }

    if (isValid) {
        feedback.textContent =
            "Your entries passed validation. This demonstration does not send or store messages.";
        feedback.className = "success";
        contactForm.reset();
    } else {
        feedback.textContent = "Please correct the highlighted fields and try again.";
        feedback.className = "error";

        const firstInvalid = contactForm.querySelector(".invalid");
        if (firstInvalid) {
            firstInvalid.focus();
        }
    }
});


// =====================================
// 4. AUTOMATIC FOOTER YEAR
// =====================================

document.getElementById("year").textContent = new Date().getFullYear();
