import { getMemories } from "./database.js";

const feed = document.getElementById("feed");

async function loadFeed(){

    const memories = await getMemories();

    feed.innerHTML = "";

    memories.reverse().forEach(memory=>{

        feed.innerHTML += `

        <div class="memory-card">

            <img src="${memory.image}" alt="${memory.title}">

            <div class="memory-info">

                <h2>${memory.title}</h2>

                <p>${memory.description}</p>

                <span>${memory.emotion}</span>

            </div>

        </div>

        `;

    });

}

loadFeed();