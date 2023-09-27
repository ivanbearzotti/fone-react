import React from "react";
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCq_VIk0P1xUxYH-O7zstifOFfVRlBiCWw",
    authDomain: "fone-1461c.firebaseapp.com",
    projectId: "fone-1461c",
    storageBucket: "fone-1461c.appspot.com",
    messagingSenderId: "628075046586",
    appId: "1:628075046586:web:7c16400f00c43945604483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)