import React from 'react'
import Img from '../../atoms/Img/Img'
import logo from '../../../images/logo.png'

import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '../../../redux/action/user.action'

export default function NavBar() {

  let {user} = useSelector( state => state.users )
  let dispatch = useDispatch()
  useEffect( ()=>{
    dispatch(getUser( parseInt( sessionStorage.getItem("user-id") ) ))
  }, [])
  console.log( user )

  let contextData = useContext( AppContext )

  let navigate= useNavigate()

  const logout = () => {
    sessionStorage.setItem("user-id", "")
    sessionStorage.setItem("login", false)
    contextData.setLoggedIn ( false )
    contextData.setUser ( {} )
    navigate("/")
  }
  return (
    <div className='navbar'>
      <Img src={logo} alt="logo" width="40px" height="40px"/>
      <ul className='navbar-list list-unstyle'>
        <li className='navbar-list-items' onClick={()=>{navigate("/")}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        </li>
       {
        sessionStorage.getItem("login")==="true"? 
        <>
        <li className='navbar-list-items' onClick={()=>{navigate("/myBlogs")}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
        </svg>
        </li>
        <li className='navbar-list-items' onClick={()=>{navigate("/addBlog")}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
        </li>
        <li  className='navbar-list-items' onClick={()=>{logout()}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
        </li>
        </>

        :
        <li  className='navbar-list-items' onClick={()=>{navigate("/auth/login")}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>

        </li>
       }
        
      </ul>
      <Img className="navbar-profile-image profile-image" src={user[0]?.profile_image} alt="" width="40px" height="40px"/>
    </div>
  )
}
