import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../../config'
import AppContext from '../../../context/AppContext'
import { getBlogs, getBlogsByCategory, getMyBlogs } from '../../../redux/action/blogs.action'
import useFetch from '../../../utils/useFetch'
import Category from '../../atoms/Category/Category'
import Blog from '../Blog/Blog'
import './blogs.css'

export default function Blogs() {
  let {blogs,blogs_loaded,myBlogs_loaded}=useSelector(state=>state.blogs)
  let dispatch= useDispatch()
  let {id} = useParams()
  let {category} = useParams()
  let contextData=useContext(AppContext)
  console.log(category)
 
  useEffect(() => {
    id==="myBlogs"? dispatch(getMyBlogs(sessionStorage.getItem("user-id"))) : dispatch(getBlogs())
  },[blogs_loaded,id,contextData.loggedin]) 

  useEffect(()=>{
    dispatch( getBlogsByCategory(category) )
  },[category])

  let [categories, loading, error] = useFetch( `${baseUrl}categories` )
        console.log( categories )
  return (
    <div className='container'>
      <div className='blogs-container'>
      <div className='categories'>
        {
          categories.map( category => <Category key={category} category={category}/> )
        }
      </div> 
      {
        blogs.map( blog => <Blog key={blog.id} blog={blog}/> )
      }
    </div>
    <div className='info'></div>
    </div>

)
}
