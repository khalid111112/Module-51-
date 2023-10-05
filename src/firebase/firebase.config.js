// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5AB_RA1Xng6pPY5zUARfRQLNQTryH_Mk",
  authDomain: "auth-moha-milon-206e1.firebaseapp.com",
  projectId: "auth-moha-milon-206e1",
  storageBucket: "auth-moha-milon-206e1.appspot.com",
  messagingSenderId: "361497408232",
  appId: "1:361497408232:web:ef9ad7de7e5a6c4c2f8f5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;