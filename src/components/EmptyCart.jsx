import React from 'react'
import  img from '../assets/images/Empty Cart Icon.jpeg'
import { Helmet } from 'react-helmet'




export default function EmptyCart() {




  return (
  <>
  <Helmet>
        <meta charSet="utf-8" />
         <title>EmptyCart</title>   
</Helmet>
  
  <div className='flex justify-center bg-white relative xsm:h-screen lg:h-auto '>


<img src={img} alt="" className='w-fit '/>
<div className='absolute bottom-7 text-center'>
<h1 className='font-bold text-[1.7rem]'>Your Cart Is Currently <span className='text-green-color'>Empty</span> !! </h1>
<p className='font-semibold text-gray-500'>Go For Shopping</p>
</div>

</div>




  </>
  )
}
