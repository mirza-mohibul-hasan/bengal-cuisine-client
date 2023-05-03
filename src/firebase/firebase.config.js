// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkH13KJfEhjmYq7D1zVfoHomGWa9T0rrk",
  authDomain: "b7a10-chef-recipe-hunter-88f79.firebaseapp.com",
  projectId: "b7a10-chef-recipe-hunter-88f79",
  storageBucket: "b7a10-chef-recipe-hunter-88f79.appspot.com",
  messagingSenderId: "981704889094",
  appId: "1:981704889094:web:b858b2dcf8b41259138487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;