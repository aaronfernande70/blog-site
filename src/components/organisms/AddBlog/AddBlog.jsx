import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Input from '../../atoms/Input/Input';
import Img from '../../atoms/Img/Img';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../../config';
import { getCategories } from '../../../redux/action/categories.action';
import Button from '../../atoms/Button/Button'
import './addBlog.css'
import Label from '../../atoms/Lable/Label';
import {fetchData} from '../../../utils/fetchData'
export default function AddBlog() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([])
  let [image, setImage]= useState("")

  let dispatch = useDispatch()
  let {categories, categoties_loaded} = useSelector( state => state.categories )
  useEffect(()=>{
      dispatch( getCategories() )
  },[categoties_loaded])


  const saveData =  () => {
    let newBlog = {
      title: title, blog_img: image,category:category, blogger_id: parseInt(sessionStorage.getItem("user-id")), likes: [], date_created: new Date()
    }
    let data=fetchData(`${baseUrl}blogs`, "POST", newBlog ) 
    let newBlog1 =  {content:value,comments:[] }
    let data1=fetchData(`${baseUrl}blog_details`, "POST", newBlog1 )
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
      <div className='add-blog'>
        <Label HTMLfor="blogTitle">Blog Title</Label>
        <Input type='text' name='blogTitle' id="blogTitle" onChangeHandler={(e) => {
          setTitle(e.target.value)
        }} />

        <Label HTMLfor="blogCategory">Category</Label>
        <select id='blogCategory'  onChange={(e)=>{
          setCategory([...category,e.target.value]) 
        }} name="categoy">
          <option>Select Category</option>
          {
            categories.map( category => <option key={category} value={category}>{category}</option> )
          }
        </select>
        <div>
        {
        category.length===0?"":category.map((item)=>{
            return (<span key={item} className=''>{item}</span>)
          })
        }
        </div>
        <Label HTMLfor="featuredImage">Featured image</Label>
        <input type="file" id='featuredImage' onChange={convert}/>
        <Img src={image} alt="featured image"/>
        <Label HTMLfor="blogContent">Blog Content</Label>
        <ReactQuill theme="snow" id='blogContent' value={value} modules={modules} onChange={setValue} formats={formats} />

        <hr></hr>
        <h1>How it will look on the webpage</h1>
        <div dangerouslySetInnerHTML={{ __html: value }} className="postDiv">
        </div>
        <hr></hr>

        <Button onClickHandler={() => {
        saveData()
        }}>Add Blog</Button>
      </div>

  );
}










