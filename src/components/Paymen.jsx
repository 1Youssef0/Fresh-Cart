import React from 'react'

import { paymentOnline } from './payonline'
import { useFormik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import useMutationCart from '../hooks/useMutationCart'
import * as motion from "motion/react-client"
import { Helmet } from 'react-helmet'

export default function Paymen({cartId}) {

    let{data,mutate} = useMutationCart(paymentOnline)

    function handlePayment(shippingAddress)
    {
        mutate({cartId,shippingAddress})
    }
   
    if(data?.data?.status ==='success')
    {
    window.location.href = data?.data?.session?.url
    
    }
    

    let formik = useFormik({
        initialValues:{
          details:'',
          phone:'',
          city:''
        },
        onSubmit: handlePayment
      })


  return (

    <div className='dark:bg-black'>
    <Helmet>
        <meta charSet="utf-8" />
         <title>Payment</title>   
</Helmet>
    
    <motion.div   
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }}>

    <form className="max-w-md mx-auto " onSubmit={formik.handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text"  id="details"  value={formik.values.details} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-color focus:outline-none focus:ring-0 focus:border-green-color peer" placeholder=" " required />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-color peer-focus:dark:text-green-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="tel"  id="phone" value={formik.values.phone} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-color focus:outline-none focus:ring-0 focus:border-green-color peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-color peer-focus:dark:text-green-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="text"  id="city"  value={formik.values.city} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-color focus:outline-none focus:ring-0 focus:border-green-color peer" placeholder=" " required />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-color peer-focus:dark:text-green-color peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
  </div>

  <button type="submit" className="text-white bg-green-color hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-color dark:hover:bg-green-700 dark:focus:ring-blue-800">Submit</button>
 
 
 
</form>
    </motion.div>
    </div>

  

  )
}
