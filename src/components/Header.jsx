import React from 'react'
import Slider from 'react-slick';
import img1 from '../assets/images/voguebillie.webp'
import img2 from '../assets/images/louis32.webp'
import img3 from '../assets/images/fashion.jpg'
import img4 from '../assets/images/shein3.webp'
import img5 from '../assets/images/gean.webp'


export default function Header() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1600,
  };


  return (
    <div className='w-full flex dark:bg-black xsm:hidden md:flex'>
      <div className='w-2/3'>

      <Slider {...settings} className='dark:bg-black'>

        <img src={img1} alt="" className='w-full object-fill h-[400px]' />
        <img src={img2} alt="" className='w-full object-cover h-[400px]' />
        <img src={img3} alt="" className='w-full object-cover h-[400px]' />

      </Slider>

      </div>

      <div className='w-1/3'>
      <img src={img4} alt="" className='h-[200px] object-cover w-full'  />
      <img src={img5} alt="" className='h-[200px] object-cover w-full' />
      </div>
    </div>
  )
}
