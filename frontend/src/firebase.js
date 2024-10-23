// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-728cb.firebaseapp.com",
  projectId: "mern-estate-728cb",
  storageBucket: "mern-estate-728cb.appspot.com",
  messagingSenderId: "522667178584",
  appId: "1:522667178584:web:d1cac7502650c151e4e82d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);