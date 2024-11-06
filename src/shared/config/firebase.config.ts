// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0TzLyx72RxYNy4iaYf8bV_Kfmlgq-6tI",
  authDomain: "portfolio-995fe.firebaseapp.com",
  projectId: "portfolio-995fe",
  storageBucket: "portfolio-995fe.firebasestorage.app",
  messagingSenderId: "749263414535",
  appId: "1:749263414535:web:f75ee3018b6f27f73591a2",
  measurementId: "G-VX41DBZ3LD"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Collections
export const homeCollectionRef = collection(db, 'home');
export const skillsCollectionRef = collection(db, 'skills');
export const experienceCollectionRef = collection(db, 'experience');
export const projectsCollectionRef = collection(db, 'projects');