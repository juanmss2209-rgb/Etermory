import { storage } from "./firebase.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

/**
 * Faz upload de uma imagem para o Firebase Storage.
 * @param {File} file
 * @returns {Promise<string>} URL da imagem
 */
export async function uploadImage(file){

    try{

        const fileName = `${Date.now()}-${file.name}`;

        const storageRef = ref(storage, `memories/${fileName}`);

        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;

    }catch(error){

        console.error(error);

        alert("Error uploading image.");

    }
<script type="module" src="memory.js"></script>

import { auth } from "./firebase.js";

await saveMemory({

    title,
    description,
    image: imageURL,
    music,
    emotion,

    collection: "Default",

    userId: auth.currentUser.uid

});
}