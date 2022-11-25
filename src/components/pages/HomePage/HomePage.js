import React from 'react'
import { useParams } from 'react-router-dom'
import AddBlog from '../../organisms/AddBlog/AddBlog'
import Blogs from '../../organisms/Blogs/Blogs'
import NavBar from '../../organisms/NavBar/NavBar'

export default function HomePage() {
  let {id}= useParams()
  return (
    <>
      <NavBar/>
      {id==="addBlog"?<AddBlog/>:<Blogs/>}
    </>
  )
}
