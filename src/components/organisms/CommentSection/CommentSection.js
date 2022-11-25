import React, { useContext, useEffect, useRef, useState } from 'react'
// import Button from '../../atoms/Button'
import Input from '../../atoms/Input/Input'
import UserComment from '../../molecules/UserComment/UserComment'
import {useParams} from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { baseUrl } from '../../../config';
import Button from '../../atoms/Button/Button';
export default function CommentSection({comments}) {
    let contextData = useContext( AppContext )
    // //(comments)
    let {id} = useParams()
    let [displayComments, setDisplayComments] = useState([])
    useEffect(()=>{
        setDisplayComments(comments)
    },[comments])
let [newComments, setNewComments] = useState([])
    const postComment = async(commentArray) => {
        // //( )
        let res = await fetch(`${baseUrl}blog_details/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {   comments: commentArray }
        )
        })
        let data = await res.json();
        // //(data)
        setDisplayComments(data.comments)
        setNewComments(data.comments)
    }
    let [comment, setComment] = useState("")
    let commentArray = comments
    // setNewComments(comments)
    const addComment = () => {
        let newComment = {
            userId : parseInt(sessionStorage.getItem("user-id")),
            content : comment,
            date_posted : new Date()
        }
        commentArray.push( newComment )
        // //( commentArray )
        postComment(commentArray)
        contextData.ref.current.value = ""
    }
    const deleteComment=(c)=>{
        setNewComments(comments?.filter((item)=>{return(item!==c)}))
        // setNewComments(newComments.filter((item)=>{return(item!==comment)}))
        // //(c)
        // //(newComments?.filter((item)=>{return(item!==comment)}))
        postComment(newComments?.filter((item)=>{return(item!==c)}))
    }
  return (
    <section className='border-t border-t-black py-7 my-7 min-w-fit'>
        <h3 className='text-2xl pb-7 text-slate-900'>Comment Section</h3>
        <div className='flex items-center gap-4'>
            <textarea rows="2" cols="70" ref={contextData.ref} className='border border-black' onChange={(e)=>{setComment(e.target.value)}}/>
            <div>
                <Button onClickHandler={addComment}>Post</Button>
            </div>
            </div>
            <div>
    <section className=''>
    {
            displayComments?.map( comment => {
                return (
                    <UserComment deleteComment={()=>{deleteComment(comment)}} comment={comment} />
                )
            } )
        }
    </section>
        </div>
    </section>
  )
}