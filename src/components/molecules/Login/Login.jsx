import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {baseUrl} from '../../../config'
import Label from '../../atoms/Lable/Label'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import AppContext from '../../../context/AppContext';
import './login.css'

export default function Login() {
  let navigate = useNavigate()
  let [loginForm,setLoginForm]=useState({})
  let contextData = useContext( AppContext )

   const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
   
  };
  const checkLogin = async (loginForm) => {
    try{
      let response = await fetch(`${baseUrl}users/?email=${loginForm.email}&password=${loginForm.password}`)
      let data=await response.json();
      return data;
  }
    catch(error){
      return error
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault()
    checkLogin(loginForm)
      .then(data=>{
        if(data.length){
            contextData.setLoggedIn( true )
            contextData.setUser( data[0] )
            sessionStorage.setItem("login",true)
            sessionStorage.setItem("user-id",data[0].id)
          navigate("/")   
        }
        else{
          // alert("incorrect email or password!")
        }
      })
  };
  return (
    <form className="auth-form" onSubmit={onSubmitHandler} >
        <Label HTMLfor="login-name">email</Label>
        <Input id='login-name' className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3 " onChangeHandler={(e)=>{
          onChangeHandler(e)
        }} name="email" type="email"/>
        <Label HTMLfor='login-password'>password</Label>
        <Input id='login-password' className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3" onChangeHandler={(e)=>{
          onChangeHandler(e)
        }} name="password" type="password"/>
        <Button type='submit' className="my-3">Login</Button>
    </form>
  )
}