import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoaV7iPd8cN2bkznIp2HTG8Nd5JKYh1Fw",
  authDomain: "gallery-84664.firebaseapp.com",
  projectId: "gallery-84664",
  storageBucket: "gallery-84664.appspot.com",
  messagingSenderId: "609410405957",
  appId: "1:609410405957:web:04c91bc3dcf6b5625cf52c",
  measurementId: "G-BQF69B3HS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();
const db = getFirestore();
const auth = getAuth();

export { app, auth, projectStorage, db };
