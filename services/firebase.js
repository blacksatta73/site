// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { Console } from "console";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo0HFBbSciDSprZ6ATVw6D7qJoijenkBs",
  authDomain: "black-satta-f197b.firebaseapp.com",
  projectId: "black-satta-f197b",
  storageBucket: "black-satta-f197b.appspot.com",
  messagingSenderId: "310887564056",
  appId: "1:310887564056:web:08f4e4375caa4224c9946d",
  measurementId: "G-HWJ4VQGEDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app); 
const database = firebase.database();

onAuthStateChanged(auth, user => {
    if(user!=null){
        console.log('logged in!');
    }
    else{
        console.log('No user');
    }
})