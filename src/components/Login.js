import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase" 

export const Login = () => {

const[isSignIn , setIsSignIn ] = useState(true)
const[errorMessage, setErrorMessage] = useState(null)
const email = useRef(null);
const password = useRef(null)

const handleButtonClick = ()=>{
    //Validate form data
    const message = checkValidData(email.current.value , password.current.value)
    //console.log(message)
    setErrorMessage(message)

    if(message) return;
    if(!isSignIn){
        //SignUp Login
        createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
          });
          

    }
    else{
        //Sign In Login
  signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)

  });
    }


}

    const handleIsSignIn = ()=>{
        setIsSignIn(!isSignIn);
    }


  return (
    <div>
    <Header/>
    <div className='absolute' >
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg ' alt='bg-img' />
    </div>
    <form onClick={(e)=>e.preventDefault()}  className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'   >
        <h1 className='text-3xl font-bold py-4' >{isSignIn?"Sign In ":"Sign Up" }</h1>
        {!isSignIn && (
            <input type='text'
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-700'/>
        )}
        <input 
        ref={email}
        type='email'
         placeholder='Email Adderss' 
         className='p-4 my-4 w-full bg-gray-700'/>
        <input 
        ref={password}
        type='password'
         placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 '/>
           <p className='text-red-500 font-bold' >{errorMessage}</p>
        <button onClick={handleButtonClick}  className='p-4 my-6 bg-red-700 w-full rounded-lg '>{isSignIn?"Sign In ":"Sign Up" }</button>
        <p className='cursor-pointer' onClick={handleIsSignIn} >{isSignIn?"New to Netflix? Sign Up Now":"Already a user? Sign In"}</p>
    </form>
    </div>
  )
}
export default Login;