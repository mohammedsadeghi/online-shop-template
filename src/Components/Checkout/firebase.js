import { FirebaseApp } from '@firebase/app';
import { initializeApp } from "firebase/app";
import firebase from 'firebase'


const firebaseApp= firebase.initializeApp(
  {apiKey: "AIzaSyAS-XPPVfugdtk81FG1EU9ETrczkDwhUyo",
  authDomain: "my-shop-9b8ae.firebaseapp.com",
  projectId: "my-shop-9b8ae",
  storageBucket: "my-shop-9b8ae.appspot.com",
  messagingSenderId: "610236852484",
  appId: "1:610236852484:web:d16c6e990c2fd00ec10851"}
);
const db =firebaseApp.firestore();
const auth = firebase.auth();




export {db,auth};









