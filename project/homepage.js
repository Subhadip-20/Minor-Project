let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

    menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });

    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
    }


    document.getElementById("loginButton").addEventListener("click", function() {
        document.getElementById("loginPopupContainer").style.display = "block"; });
   
    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("loginPopupContainer").style.display = "none"; });
   
    document.getElementById("customerLoginButton").addEventListener("click", function() { /*can add functionality for the customer login button like:- customer select */ });
    
    document.getElementById("providerLoginButton").addEventListener("click", function() { /*can add functionality for the proviver login button like:- provider select */ });
        


    document.addEventListener("DOMContentLoaded", function() {
        const contactForm = document.getElementById("contact-form");

        function handleFormSubmit(event) {
            event.preventDefault();
            alert("Form submitted!");
            contactForm.reset();
        }
        contactForm.addEventListener("submit", handleFormSubmit);
    });