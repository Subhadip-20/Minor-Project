const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");

const signinForm = document.querySelector(".sign-in-form"); 
const signinSubmitButton = document.getElementById("signin-submit-button"); 

const signupForm = document.querySelector(".sign-up-form"); 
const signupSubmitButton = document.getElementById("signup-submit-button"); 

function showSuccessPopup(message, redirectTo) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <p>${message}</p>
            <button class="popup-ok-button">OK</button>
        </div>
    `;
    document.body.appendChild(popup);

    const popupOkButton = popup.querySelector(".popup-ok-button");
    popupOkButton.addEventListener("click", () => {
        document.body.removeChild(popup);

        window.location.href = redirectTo; 
    });
}

signinForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    showSuccessPopup("Thanks for logging in!", "homepage.html"); 
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    showSuccessPopup("Account created successfully!", "c_log.html"); 
});


inputs.forEach(inp =>{
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur",() => {
         if(inp.value !="") return;
         inp.classList.remove("active");
    });
});

toggle_btn.forEach(btn => {
    btn.addEventListener("click",() => {
        main.classList.toggle("sign-up-mode");
    });
})