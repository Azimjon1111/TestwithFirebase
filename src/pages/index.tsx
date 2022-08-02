import react, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IsVerified } from "../utils/firebase";
import Link from "next/link";
import router from "next/router";
import MainPage from "../components/mainPage";
const Home: NextPage = () => {
  const [isVerified, setIsVerified] = useState<any>(null);
  useEffect(() => {
    IsVerified().then((res) => {
      if (res) {
        setIsVerified(true);
      } else {
        router.push("/signin");
      }
    });
  }, [IsVerified]);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isVerified ? (
          <MainPage />
        ) : isVerified == null ? (
          <>Loading...</>
        ) : (
          <>Not Verified</>
        )}
      </div>
      {/* <p>
    <Link href="/signin">Sign In</Link>
    </p>
    <Link href="/signup">Sign Up</Link> */}
    </>
  );
};

export default Home;
