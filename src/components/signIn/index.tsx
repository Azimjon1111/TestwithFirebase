import React, { useCallback } from "react";
import {auth, logInWithEmailAndPassword} from "../../utils/firebase";
import router from 'next/router'
import Link from "next/link";
// import firebase from 'firebase/compat/app'
// import "firebase/compat/auth";
const SignIn = () => {
  const handleSignIn = async(event: any)=>{
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    logInWithEmailAndPassword(email.value, password.value).then((res)=>{
      console.log(res)
        router.push('/')
    }).catch((err)=>{
        console.log(err)
        router.reload()
    })
  }
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <p>Don`t have account yet ? <Link href="/signup">SignUp </Link> </p>
    </div>
  );
};

export default SignIn;