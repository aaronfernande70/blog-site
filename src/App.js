import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/molecules/Login/Login'
import Signup from './components/molecules/Signup/Signup'
import AddBlog from './components/organisms/AddBlog/AddBlog'
import Blogs from './components/organisms/Blogs/Blogs'
import AuthPage from './components/pages/AuthPage/AuthPage'
import BlogPage from './components/pages/BlogPage/BlogPage'
import HomePage from './components/pages/HomePage/HomePage'
import './styles/utils.css'

export default function App() {
  return (
  <>
    <Routes>
<Route index element={<HomePage/>}/>
<Route path="/:id" element={sessionStorage.getItem("login")=== "true"? <HomePage/> : <AuthPage/>}/>
<Route path="/blogs/:category" element={<HomePage/>}/>
  {/* <Route path="blogs" element={<Blogs/>}></Route>
  <Route path="addBlog" element={<AddBlog/>}></Route> */}
<Route path="blog/:id" element={<BlogPage/>}></Route>
<Route path="auth/:id" element={<AuthPage/>}></Route>
{/* <Route path="*" element={<HomePage/>}></Route> */}

</Routes> 
    
  </>


    
  )
}
