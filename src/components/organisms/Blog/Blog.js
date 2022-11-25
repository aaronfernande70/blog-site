import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../../../utils/useFetch'
import Img from '../../atoms/Img/Img'
import { baseUrl } from '../../../config'
import './blog.css'
import Category from '../../atoms/Category/Category'
import { formatDistanceToNow } from 'date-fns'
import { useNavigate } from 'react-router-dom'

export default function Blog({blog}) {
    let navigate = useNavigate()
    // let pref = useRef()
    // console.log(blog?.small_description)
    // pref.current.innertext = blog?.small_description
   let [user, loading, error] = useFetch( `${baseUrl}users?id=${blog.blogger_id}` )
  return (
   <div className='blog-card'>
        <div className='blog-header'>
            <section className='user-info'>
                <Img className="user-image profile-image" src={user[0]?.profile_image} alt={user[0]?.name} width="30px" height="30px"/>
                <span className='user-name'>{user[0]?.name}</span>
            </section>
            <div className='posted-time'>Posted { formatDistanceToNow( new Date( blog.date_created ) ) } ago</div>
        </div>
        <div className='blog-body' onClick={()=>{navigate("/blog/"+blog.id)}}>
            <section>
                <h2 className='blog-title'>{blog?.title}</h2>
                <p>{blog?.small_description}</p>
            </section>
            <section 
                className='featured-image'>
                <Img src={blog?.blog_img} alt={blog.title} width="180px" height="100px"/>
            </section>
        </div>
        <div className='blog-footer'>
            {
                blog?.category?.map( category => <Category category={category} key={category}/> )
            }
        </div>
   </div>
 
  )
}
