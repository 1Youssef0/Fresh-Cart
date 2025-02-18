import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Items from './Items'
import Loading from './Loading'
import useProducts from '../hooks/useProducts'
import { Helmet } from 'react-helmet'

export default function Products() {

  let{data,isLoading,isError,error} = useProducts() 

  // console.log(data);
  
  
     if(isLoading){
      return <Loading></Loading>
     }

     if(isError)
     {
      return <h1>{error.message}</h1>
     }


  return (

    <>
    <Helmet>
        <meta charSet="utf-8" />
         <title>Products</title>   
</Helmet>
    
    <div className='dark:bg-black '>
      <div className="flex flex-wrap">
        {data?.map(ele=><Items prod={ele} key={ele?._id}></Items>)}
      </div>
    </div>
    </>
  )
}
