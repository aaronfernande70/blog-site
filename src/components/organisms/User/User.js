import React from 'react'
import Img from '../../atoms/Img/Img'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Lable/Label'
import './user.css'

export default function User({user}) {
  return (
    <div className='info-container'>
      <Label>Search</Label>
      <Input className="search" type="text"/>
      <div className='user-container'>
        <Img src={user?.profile_image} className="user-profile" alt="prfile image" width="200px" height="200px"/>

        <div className='user-name'>{user?.name}</div>

<div className='fixed top-80 text-center w-60 items-center'>{user?.bio}</div>

</div>
      </div>
   
  )
}
