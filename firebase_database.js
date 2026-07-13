import { db } from "./firebase.js";

import {

    collection,

    addDoc,

    getDocs,

    deleteDoc,

    doc,

    updateDoc,

    serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// ======================================
// SALVAR MEMÓRIA
// ======================================

export async function saveMemory(memory){

    try{

        const docRef = await addDoc(

            collection(db,"memories"),

            {

                title:memory.title,

                description:memory.description,

                image:memory.image,

                music:memory.music,

                emotion:memory.emotion,

                collection:memory.collection,

                createdAt:serverTimestamp()

            }

        );

        console.log("Memory saved:",docRef.id);

        return docRef.id;

    }

    catch(error){

        console.error(error);

    }

}

// ======================================
// BUSCAR MEMÓRIAS
// ======================================

export async function getMemories(){

    const snapshot = await getDocs(

        collection(db,"memories")

    );

    const memories=[];

    snapshot.forEach(doc=>{

        memories.push({

            id:doc.id,

            ...doc.data()

        });

    });

    return memories;

}

// ======================================
// APAGAR MEMÓRIA
// ======================================

export async function deleteMemory(id){

    await deleteDoc(

        doc(db,"memories",id)

    );

}

// ======================================
// ATUALIZAR MEMÓRIA
// ======================================

export async function updateMemory(id,data){

    await updateDoc(

        doc(db,"memories",id),

        data

    );
 userID: memory.userID
}