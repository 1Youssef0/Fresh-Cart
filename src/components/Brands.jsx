import React from 'react'
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from './Loading';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Brands() {


  function getBrands(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }
let {data,isLoading} = useQuery({
  queryKey:['brans'],
  queryFn:getBrands,
  select:(data)=>data?.data?.data
});





if(isLoading)
{
  return <Loading></Loading>
}
  


  return (

    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
                
            </Helmet>



            <div className='dark:bg-black'>


<h1 className='dark:bg-black text-center font-semibold text-green-color text-[2.5rem] my-5 animate-bounce'>All Brands</h1>

<div className='flex flex-wrap justify-center dark:bg-black container'>
  
  {data?.map(ele=><div key={ele?._id} className='border-solid border-2  transition-all m-4 brands'>

    <Link to={`/brandsdetails/${ele?._id}`}>
    <img src={ele.image} alt=""/>
    </Link>
  </div>)}
  
  </div>


</div>

    </>


  )


  
  

}
