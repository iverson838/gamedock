// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq8umwrM3cPs90efus1PtmdlYMGl4xExk",
  authDomain: "gamedock-db.firebaseapp.com",
  projectId: "gamedock-db",
  storageBucket: "gamedock-db.appspot.com",
  messagingSenderId: "520743170305",
  appId: "1:520743170305:web:011ad15ea0019fe3ae2b00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDoc = (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  getDoc(userDocRef).then(async (res) => {
    if (!res.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, { displayName, email, createdAt });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
  });
  return userDocRef;
};
