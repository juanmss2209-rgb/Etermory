// ==========================
// ETEMORY
// script.js
// ==========================

// Botão "Enter"
const enterButton = document.querySelector(".btn-primary");

if (enterButton) {

    enterButton.addEventListener("click", function (event) {

        event.preventDefault();

        // animação antes de entrar
        document.body.style.opacity = "0";

        document.body.style.transition = "0.8s";

        setTimeout(() => {

            window.location.href = "home.html";

        }, 800);

    });

}

// Botão Learn More
const learnButton = document.querySelector(".btn-secondary");

if (learnButton) {

    learnButton.addEventListener("click", () => {

        alert(
`Welcome to Etemory!

A place created to preserve memories.

Photos
Music
Stories
Collections

Every memory has a place.`
        );

    });

}

// Efeito de entrada da página
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// Estrelinha piscando
const star = document.querySelector(".star");

if (star) {

    setInterval(() => {

        star.style.transform = "scale(1.08)";

        setTimeout(() => {

            star.style.transform = "scale(1)";

        }, 400);

    }, 3500);

}