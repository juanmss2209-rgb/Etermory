import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// ===============================
// CADASTRO
// ===============================

export async function register(email, password){

    try{

        const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        return user;

    }catch(error){

        alert(error.message);

    }

}

// ===============================
// LOGIN
// ===============================

export async function login(email,password){

    try{

        const user = await signInWithEmailAndPassword(

            auth,

            email,

            password

        );

        return user;

    }catch(error){

        alert(error.message);

    }

}

// ===============================
// LOGIN GOOGLE
// ===============================

const provider = new GoogleAuthProvider();

export async function loginGoogle(){

    try{

        await signInWithPopup(auth,provider);

    }catch(error){

        alert(error.message);

    }

}

// ===============================
// LOGOUT
// ===============================

export async function logout(){

    await signOut(auth);

}

// ===============================
// USUÁRIO LOGADO
// ===============================

onAuthStateChanged(auth,(user)=>{

    if(user){

        console.log("Logged:",user.email);

    }else{

        console.log("No user.");

    }

});