// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "melody-manager.firebaseapp.com",
  projectId: "melody-manager",
  storageBucket: "melody-manager.appspot.com",
  messagingSenderId: "712399841179",
  appId: "1:712399841179:web:bf0a23bb0ff193bb97e33e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);