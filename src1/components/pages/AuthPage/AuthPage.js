import React from 'react'
import { useParams } from 'react-router-dom'
import Login from '../../molecules/Login/Login'
import Signup from '../../molecules/Signup/Signup'

export default function AuthPage() {
    let {id}= useParams()

  return (
    <div>{id==="signup"?<Signup/>:<Login/>}</div>
  )
}
