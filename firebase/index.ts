// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwWpGlurF3pjl5jyqNIE6nESqXuFigM6c",
  authDomain: "lets-talk-email.firebaseapp.com",
  projectId: "lets-talk-email",
  storageBucket: "lets-talk-email.appspot.com",
  messagingSenderId: "441845000947",
  appId: "1:441845000947:web:ccba0bef51eedb68dee586",
  measurementId: "G-587M27ZR5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {
    app,
}
