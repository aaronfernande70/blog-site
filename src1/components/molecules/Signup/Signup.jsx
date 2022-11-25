import React from 'react'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Lable/Label'

export default function Signup() {
  return (
    <>
    <section>
        <Label HTMLfor='signup-name'>name</Label>
        <Input type='text' id='signup-name' />
      </section>
    <section>
        <Label HTMLfor='signup-email'>email</Label>
        <Input type='email' id='signup-email' />
      </section>
    <section>
        <Label HTMLfor='signup-username'>username</Label>
        <Input type='text' id='signup-username' />
      </section>
     
      <section>
        <Label HTMLfor='signup-bio'>bio</Label>
        <Input type='text' id='signup-bio' />
      </section>
      <section>
        <Label HTMLfor='signup-profile-image'>profile image</Label>
        <Input type='file' id='signup-profile-image' />
      </section>
      <section>
        <Label HTMLfor='signup-password'>password</Label>
        <Input type='password' id='signup-password' />
      </section>
      <section>
        <Label HTMLfor='signup-confirm-password'>confirm password</Label>
        <Input type='password' id='signup-confirm-password' />
      </section>
      <section>
        <Button>Signup</Button>
      </section>
    </>
  )
}
