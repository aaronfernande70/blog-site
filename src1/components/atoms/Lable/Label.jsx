import React from 'react'

export default function Label({children,className,HTMLfor,id}) {
  return (
    <label className={className} HTMLfor={HTMLfor} id={id}>{children}</label>
  )
}
