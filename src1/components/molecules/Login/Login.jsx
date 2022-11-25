import React from 'react'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Lable/Label'

export default function Login() {
  return (
    <>
    <section>
        <Label HTMLfor='login-email'>email</Label>
        <Input id='login-email' />
      </section>
      <section>
        <Label HTMLfor='login-password'>password</Label>
        <Input id='login-password' />
      </section>
      <section>
        <Button>Login</Button>
      </section>
    </>
  )
}
