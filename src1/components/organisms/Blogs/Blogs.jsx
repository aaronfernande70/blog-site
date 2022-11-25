import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../../../config'
import { getBlogs, getMyBlogs } from '../../../redux/action/blogs.action'
import { fetchData } from '../../../utils/fetchData'
import useFetch from '../../../utils/useFetch'

export default function Blogs() {
let {blogs,blogs_loaded,myBlogs_loaded}=useSelector(state=>state.blogs)
    let dispatch= useDispatch()
    let fetchData = useFetch()


        useEffect(() => {
        //   dispatch(getBlogs())
            // dispatch(getMyBlogs())

            fetchData()

        },[myBlogs_loaded])
        console.log(blogs)
  return (
    <>

    </>

)
}
