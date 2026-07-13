import { auth } from "./firebase.js";

import {

    onAuthStateChanged,
    signOut

} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const userName = document.getElementById("userName");

const userEmail = document.getElementById("userEmail");

const logoutButton = document.getElementById("logout");

// ===============================
// USUÁRIO
// ===============================

onAuthStateChanged(auth,(user)=>{

    if(user){

        userName.textContent = user.displayName || "User";

        userEmail.textContent = user.email;

    }

    else{

        window.location.href="login.html";

    }

});

// ===============================
// LOGOUT
// ===============================

logoutButton.addEventListener("click",async()=>{

    await signOut(auth);

    window.location.href="login.html";

});