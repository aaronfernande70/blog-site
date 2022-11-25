import React, { useContext, useEffect, useState } from 'react'
// import Button from '../../atoms/Button';
import { baseUrl } from '../../../config';
import Button from '../Button/Button';
import './like.css'

export default function Like({blog}) {
    // let contextData = useContext( AuthContext )
    console.log( blog.likes )
  const updateLikes = async (updatedLikes) => {
    let res = await fetch(`${baseUrl}blogs/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {   likes: updatedLikes }
      )
    })
    let data = await res.json();

  }
  let arr
  let [isLiked, setIsLiked] = useState( false )
  useEffect(()=>{
    setIsLiked(blog?.likes?.filter( like => like == sessionStorage.getItem( "user-id" ) ).length ? true : false)
  },[blog.likes])
  const likeBlog = () =>{
    if( isLiked ) {
      setIsLiked( false )
      arr = blog?.likes?.filter( like => { return like != sessionStorage.getItem( "user-id" ) }  )
    } else {
      setIsLiked( true )
      arr= blog.likes 
      arr.push( parseInt(sessionStorage.getItem("user-id"))) 
    }

    function removeDuplicates(arr) {  return [...new Set(arr)];    }
    blog.likes=removeDuplicates(arr)
    updateLikes(removeDuplicates(arr)) 
  }
  return (
    <>
        <div className='like'>
          {blog?.likes?.length}
        <Button className="icon-button" onClickHandler={likeBlog} >
        <svg width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

        </Button> 
        </div>
    </>
    
  )
}
