import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAtllGFxWRNOeYPZ9d0Mp8d1xfyqAxwyho",
  authDomain: "hotel-taj-react.firebaseapp.com",
  projectId: "hotel-taj-react",
  storageBucket: "hotel-taj-react.appspot.com",
  messagingSenderId: "162597211834",
  appId: "1:162597211834:web:dcd82fb19286dbf1e9bc83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

