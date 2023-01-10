// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUX-bvTKmXpUkA_mdLdZk9ddqha80xkm4",
  authDomain: "excellent-64441.firebaseapp.com",
  databaseURL:
    "https://excellent-64441-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "excellent-64441",
  storageBucket: "excellent-64441.appspot.com",
  messagingSenderId: "382413440782",
  appId: "1:382413440782:web:d958ac396ae92e2170395f",
  measurementId: "G-224B1JLMQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
