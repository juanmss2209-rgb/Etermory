import { auth } from "./firebase.js";
import { getMemories } from "./database.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileImage = document.getElementById("profileImage");
const profileFeed = document.getElementById("profileFeed");
const memoryCount = document.getElementById("memoryCount");

onAuthStateChanged(auth, async (user) => {

    if(!user){

        window.location.href = "login.html";
        return;

    }

    profileName.textContent = user.displayName || "User";
    profileEmail.textContent = user.email;

    if(user.photoURL){
        profileImage.src = user.photoURL;
    }

    const memories = await getMemories();

    const userMemories = memories.filter(memory => memory.userId === user.uid);

    memoryCount.textContent = userMemories.length;

    profileFeed.innerHTML = "";

    userMemories.forEach(memory => {

        profileFeed.innerHTML += `

        <div class="memory-card">

            <img src="${memory.image}" alt="${memory.title}">

            <div class="content">

                <h2>${memory.title}</h2>

                <p>${memory.description}</p>

                <span>${memory.emotion}</span>

            </div>

        </div>

        `;

    });

});