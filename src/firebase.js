// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidplg0fa66fK2DPCsuHm_pYMaCRGg8o8",
  authDomain: "fonteshop-d0e3e.firebaseapp.com",
  projectId: "fonteshop-d0e3e",
  storageBucket: "fonteshop-d0e3e.appspot.com",
  messagingSenderId: "706311134652",
  appId: "1:706311134652:web:ce81ce8ecc2610498d9fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };