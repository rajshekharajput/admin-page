import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBM7F_famXtGa7Cb7nTIjZFZsW0XrDKs1Y",
  authDomain: "admin-7d5f4.firebaseapp.com",
  projectId: "admin-7d5f4",
  storageBucket: "admin-7d5f4.appspot.com",
  messagingSenderId: "206249460349",
  appId: "1:206249460349:web:d8e88d6c54fcb545ae2714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);