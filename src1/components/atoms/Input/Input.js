import React from 'react'

export default function Input({className,name,value,id,onChangeHandler,type}) {
  return (
    <input className={className} type={type} name={name} value={value} id={id} onChange={onChangeHandler}/>
  )
}
