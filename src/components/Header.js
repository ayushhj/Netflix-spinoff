import React ,{useEffect} from 'react'
import {signOut } from "firebase/auth";
import {auth}from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import addUser, { removeUser } from "../utils/userSlice"
import { LOGO, USER_AVATAR } from '../utils/constant';


const Header = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const user = useSelector((store)=>store.user)

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
     navigate("/error")
    });
  }


  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayname  } = user;
       //dispatch(addUser({uid:uid,email:email}))
     // console.log(uid)
     navigate("/browse")
      } else {
     //dispatch(removeUser())
      navigate("/") 
      }
    });
    //Unsusbcribe when component unmounts
    return() => unsubscribe()
  },[])
  


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '   >   
        <img className='w-44'
         src={LOGO} alt='Logo'  />
<div className=' flex p-2'  >
  <img className='w-12 h-12' src={USER_AVATAR} />
  <button onClick={handleSignOut}  className='font-bold text-white' >(SignOut)</button>
</div>


    </div>
  )
}

export default Header;