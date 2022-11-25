import React, { useContext, useState } from "react";
// import StyledButton from "../../atoms/Button/StyledButton";
// import Form from "../../atoms/Form/Form";
// import Input from "../../atoms/Input/Input";
// import Label from "../../atoms/Label/Label";
// import Button from '../../atoms/Button/Button'
// import ImageContext from "../../../context/ImageContext";
import Img from "../../atoms/Img/Img";
// import ImageConverter from "../../ImageConverter";
import {baseUrl} from '../../../config'
// import Form from '../../../../src1/components/atoms/Form/Form'
import Label from '../../atoms/Lable/Label'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
export default function Signup() {
  let [signupForm, setSignupForm] = useState({});
  // let imageContextData=useContext(ImageContext)
  let [image, setImage] = useState( "" )
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignupForm({
      ...signupForm,
      [name]: value,
      profile_image:image
    });
    // //(signupForm);
  };
  const postUser = async (signupForm) => {
    try{
      let response = await fetch(`${baseUrl}users`, 
      {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(signupForm),
      });
      let message=await response.json();
      return message
  }
    catch(error){
      return error
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault()
    postUser(signupForm)
  //     .then(data=>{
  //       // //(data)})
  };

  const convert=(e)=> {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
     reader.onload = () => {
        setImage( reader.result)
    };
  }
  return (<div className="flex flex-col items-center">
    <Img src={image} alt='profile-image' width="170px"/>
    <form className="flex flex-col" onSubmit={onSubmitHandler}>
      <Label HTMLfor="signup-name">name</Label>
      <Input
      id='signup-name'
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="name"
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="text"
      />
      <Label HTMLfor='signup-username'>username</Label>
      <Input
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="username"
        id='signup-username'
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="text"
      />
      <Label>Profile Image</Label>
      {/* <ImageConverter ariaLabel='click here to upload profile image'/> */}
      <input type="file" id='featuredImage' onChange={convert}/>
      <Label HTMLfor='signup-email'>email</Label>
      <Input
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="email"
        id='signup-email'
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="email"
      />
      <Label HTMLfor='signup-bio'>Bio</Label>
      <Input
      id='signup-bio'
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="bio"
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="text"
      />
      <Label HTMLfor='signup-password'>password</Label>
      <Input
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="password"
        id='signup-password'
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="password"
      />
        <Button name='signup' ariaLabel='click to button' disabled={false} className="bg-black text-white my-3">
          Signup
        </Button>
    </form>
    </div>
  );
}