import { formatDistanceToNow } from 'date-fns'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../../config'
import { getBlog } from '../../../redux/action/blogs.action'
import { getUser } from '../../../redux/action/user.action'
import { fetchData } from '../../../utils/fetchData'
import useFetch from '../../../utils/useFetch'
import Button from '../../atoms/Button/Button'
import Img from '../../atoms/Img/Img'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Lable/Label'
import Floater from '../../molecules/Floater/Floater'
import NavBar from '../../organisms/NavBar/NavBar'
import User from '../../organisms/User/User'
import './blogPage.css'

export default function BlogPage() {
  let {id} = useParams()
 
  let [fullBlog, setFullBlog] = useState({})
  let [user, setUser] = useState({})
  const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    let [smallDescription,setSmallDescription]=useState("")
    const [category, setCategory] = useState([])
    let [isEdit,setIsEdit]=useState(false)
    let [image, setImage]= useState(fullBlog.blog_img)

    useEffect(()=>{
      setTitle(fullBlog.title)
      setValue(fullBlog.content);
      setSmallDescription(fullBlog.small_description);
      setCategory(fullBlog.category)
    },[fullBlog, isEdit])

  const getData = async () => {
    let res = await fetch(`${baseUrl}blogs/${id}`, {
      method: "GET"  
    })
   let blog = await res.json();  
    let res1 = await fetch(`${baseUrl}blog_details/${id}`, {
      method: "GET"
    })
    let blogDetails = await res1.json();
    fullBlog=Object.assign(blog,blogDetails)
    setFullBlog( fullBlog )
    console.log( fullBlog )
    let data = await fetch( `${baseUrl}users/${fullBlog?.blogger_id}`,
    {method: "GET"} )

    user = await data.json()
    setUser(user)
    console.log(user)
  }
 
  useEffect(() => {
    getData()
  },[isEdit])

  const saveData = async () => {
    let res = await fetch(`${baseUrl}blogs/${fullBlog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        { title: title, small_description: smallDescription , blog_img: image,category:category, blogger_id: parseInt(sessionStorage.getItem("user-id")), likes: fullBlog.likes, date_created: new Date() }
      )
    })
    let data = await res.json();
    console.log(data)
    // //(data)
    // alert(data)
    let res1 = await fetch(`${baseUrl}blog_details/${fullBlog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {content:value,comments:fullBlog.comments }
      )
    })
    let data1 = await res1.json();
    console.log(data1)
    getData()
    // alert(data1)
  }

  const formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'header', 'blockquote', 'code-block',
    'indent', 'list',
    'direction', 'align',
    'link', 'image', 'video', 'formula',
  ]
  let modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }
  const convert=(e)=> {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
     reader.onload = () => {
        setImage( reader.result)
    };
  }

  
  return (
    <div className='blogpage'>
    <NavBar/>
    <div className='container'>
    {
      isEdit? (
        <div className='m-10 mt-20 load-slowly'>
        <Label className='mt-16'>Post title:</Label>
             <Input type='text' value={title} name='blogTitle' className='border border-gray-400 rounded-sm' onChangeHandler={(e) => {
               setTitle(e.target.value);
               //(title)
             }} />
         <Label>Category:</Label>
             <select className='w-20 px-2 py-1 my-2 rounded'  onChange={(e)=>{
               // //(e.target.value)
               setCategory([...category,e.target.value])
             }} name="categoy">
               <option value="food">food</option>
               <option value="technology">technology</option>
               <option value="nature">nature</option>
             </select>
        <input type="file" id='featuredImage' onChange={convert}/>
        <Img src={image} alt="featured image"/>
         <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} formats={formats} />
        <Button className='my-2' onClickHandler={() => {
               saveData();
               setIsEdit(false)
             }}>Save</Button>
       </div>
      )

      :

      (
        <div className='blog-details'>
        <section className='details-header'>
          <section className='user'>
                <Img className="user-image profile-image" src={user?.profile_image} alt={user?.name} width="30px" height="30px"/>
                <div className='user-info'>
                <span className='user-name'>{user?.name}</span>
                <span className='posted-time'>Posted {fullBlog?.date_created && formatDistanceToNow( new Date(fullBlog?.date_created  ) ) } ago</span>
                </div>
            </section>
        </section>
        <section className='details-body'>
          <div>{fullBlog?.title}
          <Button className="icon-button" onClickHandler={()=>{setIsEdit( true )}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>

          </Button>
          </div>
          <div>{fullBlog?.short_description}</div>
          <Img src={fullBlog?.blog_img} alt={fullBlog?.title} width="600px" height="600px"/>
          <div dangerouslySetInnerHTML={{ __html: fullBlog?.content }} className="postDiv">
        </div>
        </section>
        <Floater blog={fullBlog}/>

      </div>
      )
    }
      
     

    </div>
    <User user={user}/>
    </div>
  )
}
