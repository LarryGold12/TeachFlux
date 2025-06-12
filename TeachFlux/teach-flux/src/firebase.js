// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAqKIfH5y8-2VjF0HFwtF2wcykGVm0eEJA",
    authDomain: "teach-flux.firebaseapp.com",
    projectId: "teach-flux",
    storageBucket: "teach-flux.firebasestorage.app",
    messagingSenderId: "680301146101",
    appId: "1:680301146101:web:16e4c3310e46f4c663babc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
