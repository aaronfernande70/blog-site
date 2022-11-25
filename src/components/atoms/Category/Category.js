import React from 'react'
import { useNavigate } from 'react-router-dom'
import './category.css'

export default function Category({category}) {
    let navigate = useNavigate()
  return (
    <span 
      onClick={()=>{ navigate("/blogs/"+category) }} 
      className='category link-unstyle'>{category}
    </span>
  )
}
