import React from 'react'
import { useFirebase } from "../context/firebase";



const HomePage = () => {
  const { signinUserwithEmailandPassword, signInWithGoogle, isLoggedIn } =
  useFirebase();
  console.log(isLoggedIn);
  return (
    <div className="text-lg flex justify-center items-center h-screen">Hello World !!!!!</div>
  )
}

export default HomePage