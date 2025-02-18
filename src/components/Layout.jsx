import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import image from '../assets/images/light-patten.svg'

export default function Layout() {
  return (
    <div className='flex flex-col justify-between min-h-screen' style={{backgroundImage:`url(${image})`}}>

      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
