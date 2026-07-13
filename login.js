import { login, loginGoogle } from "./auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    try{

        await login(email, password);

        window.location.href = "home.html";

    }catch(error){

        alert(error.message);

    }

});

const googleButton = document.querySelector(".google");

if(googleButton){

    googleButton.addEventListener("click", async () => {

        try{

            await loginGoogle();

            window.location.href = "home.html";

        }catch(error){

            alert(error.message);

        }

    });

}