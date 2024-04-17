import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxr-lvkfcvb2Cw6CwI0-4SNDSn3bxjI2g",
  authDomain: "auth-jc.firebaseapp.com",
  projectId: "auth-jc",
  storageBucket: "auth-jc.appspot.com",
  messagingSenderId: "639025513123",
  appId: "1:639025513123:web:edc7ad105e603ab7ee7516",
  measurementId: "G-7J2GGQPJTC"
  };
  

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);