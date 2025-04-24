// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJmXlIdpvYW2QRHagnvoRSc-AJ4lnmcsk",
  authDomain: "beu-rank.firebaseapp.com",
  projectId: "beu-rank",
  storageBucket: "beu-rank.firebasestorage.app",
  messagingSenderId: "333254655204",
  appId: "1:333254655204:web:f4993e788a470810bb40f1"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
