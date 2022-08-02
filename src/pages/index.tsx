import react, {useEffect, useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {IsVerified} from '../utils/firebase'
import Link from 'next/link'
const Home: NextPage = () => {
  const [isVerified, setIsVerified] = useState(false)
  useEffect(()=>{
    IsVerified().then((res)=>{
      console.log(res)
      setIsVerified(res)
    })
  },[IsVerified])
  return (
    <>
    {isVerified ? <div>Verified</div> : <div>Not Verified</div>}
    <p>
    <Link href="/signin">Sign In</Link>
    </p>
    <Link href="/signup">Sign Up</Link>
    </>
  )
}

export default Home
