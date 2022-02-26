import React, { useEffect } from 'react'
import Footer from './Footer'
import  Navbar  from './Navbar'
import { useDispatch } from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../database';
import { login, logout } from '../features/auth';
import { emptyCart, getCart } from '../features/cart';
const Page = ({children}) => {

  const distpatch =useDispatch()

  useEffect(()=>{

      onAuthStateChanged(auth, (authResult)=>{

        if(authResult){
          distpatch(login({
            email: authResult.email,
            id:authResult.uid,
            profilePic:authResult.photoURL
          }))
          distpatch(getCart())
        }else{
          distpatch(logout())
          distpatch(emptyCart())
        }
      })


  },[])

  return (
      <>
        <Navbar />
        {children}
        <Footer/>
      </>
    
  )
}

export default Page