// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCLmDl-pDHjpYegQ9c-cxHIVKcMFg4HoE",
    authDomain: "beu-rank-finder.firebaseapp.com",
    projectId: "beu-rank-finder",
    storageBucket: "beu-rank-finder.firebasestorage.app",
    messagingSenderId: "25827331873",
    appId: "1:25827331873:web:432cfd0f711d8d8532b860"
  };



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
