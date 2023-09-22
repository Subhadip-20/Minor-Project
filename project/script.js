document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    function handleFormSubmit(event) {
        event.preventDefault();
        alert("Form submitted!");
        contactForm.reset(); 
    }

    contactForm.addEventListener("submit", handleFormSubmit);
})
document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.querySelector(".menu-bar");
    const navOption = document.querySelector(".option");

    function toggleMobileMenu() {
        navOption.classList.toggle("show");
    }
    
    menuBar.addEventListener("click", toggleMobileMenu);
});
