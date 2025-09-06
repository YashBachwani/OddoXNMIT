// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp8Gl17siCCwJ2tKwt26b41XZX3fhV2qU",
  authDomain: "ecofinds-5759d.firebaseapp.com",
  projectId: "ecofinds-5759d",
  storageBucket: "ecofinds-5759d.firebasestorage.app",
  messagingSenderId: "937601717292",
  appId: "1:937601717292:web:dca41db67ce8a9d3206d89",
  measurementId: "G-56CQ0KWZJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
