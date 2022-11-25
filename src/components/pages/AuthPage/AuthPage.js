import React from 'react'
import { useParams } from 'react-router-dom'
import Login from '../../molecules/Login/Login'
import Signup from '../../molecules/Signup/Signup'
import './authPage.css'

export default function AuthPage() {
    let {id}= useParams()

  return (
    <div className='auth-holder'>{id==="signup"?<Signup/>:<Login/>}</div>
  )
}
