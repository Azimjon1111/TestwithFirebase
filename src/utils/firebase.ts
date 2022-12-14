import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  getIdToken,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import router from "next/router";
const firebaseConfig = {
  apiKey: "AIzaSyAgbBPa6LeinuXhhrYrA4S1ea9eisQi-ig",
  authDomain: "practise-6e2c1.firebaseapp.com",
  projectId: "practise-6e2c1",
  storageBucket: "practise-6e2c1.appspot.com",
  messagingSenderId: "259267562603",
  appId: "1:259267562603:web:64242c4544e8d09d91752e",
  measurementId: "G-JKL75LGJ1K",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
    localStorage.setItem("idToken", res._tokenResponse.idToken);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
      password,
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    alert(err.message);
    throw err;
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("idToken", res._tokenResponse.idToken);
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
    throw err;
  }
};
const logout = () => {
  signOut(auth);
};
const IsVerified = async () => {
  const idToken = window.localStorage.getItem("idToken");
  let accessToken = await getAuth(app).currentUser?.accessToken;
  let res = false;
  if (idToken?.length > 10 || accessToken != null) {
    res = true;
  }
  return res;
};

export {
  auth,
  db,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  IsVerified,
  app,
};
