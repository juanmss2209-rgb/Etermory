import { register } from "./auth.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    const name = inputs[0].value.trim();

    const email = inputs[1].value.trim();

    const password = inputs[2].value;

    const confirmPassword = inputs[3].value;

    if(password !== confirmPassword){

        alert("Passwords do not match.");

        return;

    }

    try{

        await register(email,password);

        alert("Welcome to Etemory, " + name + "!");

        window.location.href="home.html";

    }

    catch(error){

        alert(error.message);

    }

});