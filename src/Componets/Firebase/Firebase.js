// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi0Jzz-2VmBIrOAuVD5kbwnRG7FCc8aNo",
  authDomain: "doctors-f203b.firebaseapp.com",
  projectId: "doctors-f203b",
  storageBucket: "doctors-f203b.firebasestorage.app",
  messagingSenderId: "117839885137",
  appId: "1:117839885137:web:5c9e5d2588f7c594b1d970",
  measurementId: "G-FC2BVSQGPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;
