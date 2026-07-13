// Importa as funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

// ===========================
// CONFIGURAÇÃO DO FIREBASE
// ===========================

const firebaseConfig = {

  apiKey: "COLOQUE_SUA_API_KEY",

  authDomain: "SEU_PROJETO.firebaseapp.com",

  projectId: "SEU_PROJETO",

  storageBucket: "SEU_PROJETO.firebasestorage.app",

  messagingSenderId: "000000000000",

  appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"

};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Serviços
const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

// Exporta para usar em outros arquivos
export {

    auth,

    db,

    storage

};