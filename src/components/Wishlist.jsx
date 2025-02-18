import React from 'react'
import useMutationWishlist, { addwish, deletewish } from '../hooks/useMutationWishlist'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import toast from './../../node_modules/react-hot-toast/src/index';
import WishlistBackground from './WishlistBackground';
import { div } from 'motion/react-client';
import useMutationCart, { addCart } from '../hooks/useMutationCart';
import { Helmet } from 'react-helmet';

export default function Wishlist() {

    let token = localStorage.getItem('token')
    function getWish(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:{token}})}

    let {data} =  useQuery({
        queryKey:['addwish'],
        queryFn:getWish,
        refetchInterval:500,
        refetchOnWindowFocus:false,
        
    })

    console.log(data?.data?.count);

    let{data:deletedData,mutate,isSuccess,isError} = useMutationWishlist(deletewish) 
    let {mutate:mutated} = useMutationCart(addCart)

    // console.log(deletedData?.data?.message);

    // deletedData?.response?.data?.message
    
    // if(isSuccess)
    // {
    //     toast.success(deletedData?.data?.message)
    // }

    // if(isError)
    // {
    //      toast.error(deletedData?.response?.data?.message)
    // }

    if(data?.data?.count===0)
    {
        return <WishlistBackground></WishlistBackground>
    }    

    
    
 

    
     

  return (


    <>
      <Helmet>  
        <meta charSet="utf-8" />  
         <title>Wishlist</title>   
</Helmet>
    
      <div className='dark:bg-black dark:xsm:h-screen dark:lg:auto '>
      <div className="shadow-lg  relative xsm:overflow-x-auto sm:rounded-lg  ">
      <h1 className='text-center text-green-color text-[2.5rem] font-semibold dark:bg-black my-5  animate-bounce'>Wish List <i class="fa-solid fa-heart text-green-color text-[2rem] "></i></h1>

<table className="shadow-lg w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">

<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
  <tr>
    <th scope="col" className="px-6 py-3">
      <span className="">Image</span>
    </th>
    <th scope="col" className="px-6 py-3">
      Product
    </th>
  
    <th scope="col" className="px-6 py-3">
      Price
    </th>
    <th scope="col" className="px-6 py-3">
      Action
    </th>
    <th scope="col" className="px-6 py-3">
      Action
    </th>
  </tr>
</thead>
<tbody>

  {data?.data?.data?.map((prod=>
  <tr key={prod?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
   
   
    <td className="p-4">
      <img src= {prod?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
    </td>


    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
     {prod?.title}
    </td>





    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
     {prod?.price} EGP
    </td>
    <td className="md:px-6 md:py-4 ">
      <button  onClick={()=>{mutate(prod?._id)}} className=" font-medium text-red-600 dark:text-red-500  bg-red-200 px-2 py-3 rounded-full hover:bg-red-300">Remove <i className=' fa-solid fa-trash'></i></button>
    </td>

    <td className="md:px-6 md:py-4 ">
      <button  onClick={()=>{mutated(prod?._id),mutate(prod?._id)}}   className=" font-medium text-green-600 dark:text-green-500  bg-green-200 px-2 py-3 rounded-full hover:bg-green-300">+add to cart</button>
    </td>
  </tr>
  ))}
 
</tbody>
</table>
</div>
</div>
    </>

  
       



  )
}
