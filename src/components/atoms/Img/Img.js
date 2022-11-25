import React from 'react'

export default function Img({src, alt, width, height, className}) {
  return (
    <img src={src} className={className} alt={alt} width={width} height={height} />
  )
}
