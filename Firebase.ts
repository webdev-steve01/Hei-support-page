// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXmiwAnCTcRjZjtIGMlQfkI-YhX4NF0T4",
  authDomain: "heii-9faec.firebaseapp.com",
  projectId: "heii-9faec",
  storageBucket: "heii-9faec.firebasestorage.app",
  messagingSenderId: "176432257216",
  appId: "1:176432257216:web:eef3bf03f81f74a032b525",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
