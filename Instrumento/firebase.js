// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAymJIsCKg3vrB0TMsH6qnNp0IFvVlPxwI",

    authDomain: "exercicio1-a03ef.firebaseapp.com",
  
    projectId: "exercicio1-a03ef",
  
    storageBucket: "exercicio1-a03ef.appspot.com",
  
    messagingSenderId: "1017779737299",
  
    appId: "1:1017779737299:web:189ed33a7e08f85049ba26"  

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore };