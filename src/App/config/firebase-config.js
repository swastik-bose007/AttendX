// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwAjAL9ZEwonZOZwpdcDqA9h7qL_hTXqk",
    authDomain: "attendx-7df3e.firebaseapp.com",
    projectId: "attendx-7df3e",
    storageBucket: "attendx-7df3e.appspot.com",
    messagingSenderId: "49875983839",
    appId: "1:49875983839:web:8a50678b4c31c97b73f86a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage(app);




