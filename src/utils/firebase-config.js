import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5F6xN_JQYbVwlMXta3pnLbdFl32GlUi0",
  authDomain: "react-netflix-434ec.firebaseapp.com",
  projectId: "react-netflix-434ec",
  storageBucket: "react-netflix-434ec.appspot.com",
  messagingSenderId: "1046131806505",
  appId: "1:1046131806505:web:79a8d60fbe9f6938906738",
  measurementId: "G-HYD2JPV7SV"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);