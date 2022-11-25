import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../organisms/NavBar/NavBar'
import User from '../../organisms/User/User'
import './blogPage.css'

export default function BlogPage() {
  let {id} = useParams()
  console.log(id)
  let inputRef = useRef()
  let [input, setInput] = useState("")
  const selection = (event) => {
    const select = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    // inputRef.current.textContent = `You selected: ${select}`;
    setInput(  `<h1>${select}</h1>` )
  }
  return (
    <>
    <NavBar/>
    <div className='container'>
      <div className='blog-details'>
        <input value={input}   onSelect={(event)=>{
          // setInput(`<h1>${event.target.value}</h1>`)
          selection(event)
        }}/>
        <div ref={inputRef}>
         {input}
        </div>
        <div dangerouslySetInnerHTML={{ __html: input }} className="postDiv">
        </div>
      </div>
      <User/>

    </div>
    </>
  )
}
