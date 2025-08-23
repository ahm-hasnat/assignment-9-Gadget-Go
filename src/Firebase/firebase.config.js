// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClh4D79CmF4gyas4L0FC4fGhoW37JSwds",
  authDomain: "fir-gadget-go.firebaseapp.com",
  projectId: "fir-gadget-go",
  storageBucket: "fir-gadget-go.firebasestorage.app",
  messagingSenderId: "305618152288",
  appId: "1:305618152288:web:6ae76c2f9630a43fbdcc05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;