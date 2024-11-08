import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDjqNmFKA6yMrv6IaxiDFYtXkR7jc6Zbzc",
  authDomain: "collaboration-3cdf8.firebaseapp.com",
  projectId: "collaboration-3cdf8",
  storageBucket: "collaboration-3cdf8.firebasestorage.app",
  messagingSenderId: "56394543977",
  appId: "1:56394543977:web:21057e10062d9420d503f8",
  measurementId: "G-X3BF5LJ2FB"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

export { auth , db };

export default app;
