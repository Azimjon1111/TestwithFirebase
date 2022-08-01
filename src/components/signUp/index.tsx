import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {auth, registerWithEmailAndPassword} from "../../utils/firebase";
import router from 'next/router'
// import firebase from 'firebase/compat/app'
// import "firebase/compat/auth";
const SignUp = () => {
  const handleSignUp = async()=>{
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    registerWithEmailAndPassword(email.value, password.value).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    // try {
    //   await db
    //     .auth()
    //     .createUserWithEmailAndPassword(email.value, password.value);
    //     router.push('/')
    // } catch (error) {
    //   alert(error);
    // }
  }
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;