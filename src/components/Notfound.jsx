import React from 'react'
import img from '../assets/images/Capture.png'
import { Helmet } from 'react-helmet'
export default function Notfound() {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
         <title>NotFound</title>   
</Helmet>
      <img src={img} alt="" />
    </div>
  )
}


