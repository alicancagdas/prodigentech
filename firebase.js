// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDinojUVYtGA-KjEOc1cDYBn14I2MuLbac",
  authDomain: "prodigentechweb.firebaseapp.com",
  projectId: "prodigentechweb",
  storageBucket: "prodigentechweb.appspot.com",
  messagingSenderId: "944908803627",
  appId: "1:944908803627:web:dc0db8207bcc61ae2472ee",
  measurementId: "G-PB8MVRMTXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
