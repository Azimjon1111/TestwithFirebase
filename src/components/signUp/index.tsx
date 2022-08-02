import React, { useCallback } from "react";
import { auth, registerWithEmailAndPassword } from "../../utils/firebase";
import router from "next/router";
import Link from "next/link";
const SignUp = () => {
  const handleSignUp = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    registerWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        router.reload();
      });
  };
  return (
    <div>
      <h1>Sign up</h1>
      <h2>Create a new user</h2>
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
        <p>
          Already have an account? <Link href="/signin">SignIn </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
