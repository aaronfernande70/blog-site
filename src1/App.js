import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/molecules/Login/Login'
import Signup from './components/molecules/Signup/Signup'
import AddBlog from './components/organisms/AddBlog/AddBlog'
import Blogs from './components/organisms/Blogs/Blogs'
import AuthPage from './components/pages/AuthPage/AuthPage'
import BlogPage from './components/pages/BlogPage/BlogPage'
import HomePage from './components/pages/HomePage/HomePage'

export default function App() {
  return (<>
<Routes>
    <Route index element={<HomePage/>}/>
    <Route path="/:id" element={<HomePage/>}>
      {/* <Route path="blogs" element={<Blogs/>}></Route>
      <Route path="addBlog" element={<AddBlog/>}></Route> */}
    </Route>
    <Route path="blog/:id" element={<BlogPage/>}></Route>
    <Route path="auth/:id" element={<AuthPage/>}></Route>
</Routes>
  </>
    
    
  )
}
