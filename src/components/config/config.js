import firebase from "firebase/app"
import "firebase/auth";




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3eamDw-P4U19Tb6oZjx3GAKMuIKEI09s",
  authDomain: "useauth-9100e.firebaseapp.com",
  projectId: "useauth-9100e",
  storageBucket: "useauth-9100e.appspot.com",
  messagingSenderId: "1021475729304",
  appId: "1:1021475729304:web:3ea14192816b79102805ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;