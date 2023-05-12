import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyChWtn33DwyeK1JTk1sBAtrDSHQjDmSpF4",
    authDomain: "whatsclone-c350e.firebaseapp.com",
    projectId: "whatsclone-c350e",
    storageBucket: "whatsclone-c350e.appspot.com",
    messagingSenderId: "327995483848",
    appId: "1:327995483848:web:37b187dea421adec8727fd",
    measurementId: "G-L3XNZXEWNN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();

export { app, auth, firestore };