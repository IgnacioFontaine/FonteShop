import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBidplg0fa66fK2DPCsuHm_pYMaCRGg8o8",
  authDomain: "fonteshop-d0e3e.firebaseapp.com",
  projectId: "fonteshop-d0e3e",
  storageBucket: "fonteshop-d0e3e.appspot.com",
  messagingSenderId: "706311134652",
  appId: "1:706311134652:web:ce81ce8ecc2610498d9fb9"
};

const firebaseApp = firebase.initalizeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };