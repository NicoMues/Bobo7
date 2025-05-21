// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAC6Gz2yw9Vz61WnNkNoSjtNxBDeufV894",
  authDomain: "bobo7-ab130.firebaseapp.com",
  projectId: "bobo7-ab130",
  storageBucket: "bobo7-ab130.firebasestorage.app",
  messagingSenderId: "35397911826",
  appId: "1:35397911826:web:820008efabfbda806c5fcb",
  measurementId: "G-PBZC56N42X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);

// Exports
export { app, auth, db };
