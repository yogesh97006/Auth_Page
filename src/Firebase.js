// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvkRNUHxikEKIIAOyrpZqUEnbhEcZ_O1s",
  authDomain: "authication-234d7.firebaseapp.com",
  projectId: "authication-234d7",
  storageBucket: "authication-234d7.appspot.com",
  messagingSenderId: "773794683112",
  appId: "1:773794683112:web:1841cf63cfc2d21974915d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app)
export default app