// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjlr7qSYmTHNo_13VoZkYbdo3-SvOys3w",
  authDomain: "learning-a7662.firebaseapp.com",
  projectId: "learning-a7662",
  storageBucket: "learning-a7662.appspot.com",
  messagingSenderId: "226811121186",
  appId: "1:226811121186:web:a43983ecbb5c668a7a047b",
  measurementId: "G-83XVNKP46N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {auth , db , googleProvider}
