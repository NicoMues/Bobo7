// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC6Gz2yw9Vz61WnNkNoSjtNxBDeufV894",
  authDomain: "bobo7-ab130.firebaseapp.com",
  projectId: "bobo7-ab130",
  storageBucket: "bobo7-ab130.firebasestorage.app",
  messagingSenderId: "35397911826",
  appId: "1:35397911826:web:820008efabfbda806c5fcb",
  measurementId: "G-PBZC56N42X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
