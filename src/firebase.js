import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC6Gz2yw9Vz61WnNkNoSjtNxBDeufV894",
  authDomain: "bobo7-ab130.firebaseapp.com",
  projectId: "bobo7-ab130",
  storageBucket: "bobo7-ab130.appspot.com",
  messagingSenderId: "35397911826",
  appId: "1:35397911826:web:820008efabfbda806c5fcb",
  measurementId: "G-PBZC56N42X",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
