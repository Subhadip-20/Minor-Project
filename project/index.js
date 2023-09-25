document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Perform form validation
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // You can add code here to send the form data to a server or perform other actions.
        // For now, let's display an alert.
        alert("Form submitted successfully!");
        contactForm.reset();
    });
});
