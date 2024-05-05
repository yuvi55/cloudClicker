// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALj1UiGtXlL683-nH9qly-TcWKIPF2eQw",
  authDomain: "clickapp-18769.firebaseapp.com",
  projectId: "clickapp-18769",
  storageBucket: "clickapp-18769.appspot.com",
  messagingSenderId: "139779448769",
  appId: "1:139779448769:web:9710684f86f2c0a5d49940",
  measurementId: "G-F958GWXRME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) ; 

export default db ; 