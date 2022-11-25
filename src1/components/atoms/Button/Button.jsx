import React from 'react'

export default function Button({children,type,ariaLabel,className,onClickHandler,name,id}) {

  return (
    <button type={type} aria-label={ariaLabel} className={className} onClick={onClickHandler} id={id} name={name}>{children}</button>
  )
}
