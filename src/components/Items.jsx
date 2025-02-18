

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useMutationCart, { addCart } from '../hooks/useMutationCart'
import toast from './../../node_modules/react-hot-toast/src/index';
import useMutationWishlist, { addwish, deletewish } from '../hooks/useMutationWishlist';
import { body, style } from 'motion/react-client';
import { usertoken } from '../context/UserToken';



export default function Items({prod}) {

  //  let{imageCover,price,title,ratingsAverage,priceAfterDiscount,id}= prod

  
   
  
   let {data,mutate,error,isError ,isSuccess} = useMutationCart(addCart)
   let{data:datawish ,mutate:muwished,isSuccess:success,isError:iserorrrr,error:eeror} = useMutationWishlist(addwish)
   let{data:deleteddata,mutate:deletemutate} = useMutationWishlist(deletewish)
   let[isActive,setActive] = useState(false)
    let {isLogin} = useContext(usertoken)
      

  //  console.log(data?.data?.message);
  //  console.log(data?.data?.status);
  // console.log(error?.response?.data?.message);
  
  if(isSuccess)
  {
    toast.success(data?.data?.message)
  }
  
  if(isError)
  {
    toast.error(error?.response?.data?.message)
  }
   
  if(success)
    {
      toast.success(datawish?.data?.message)
    }
    
    if(iserorrrr)
    {
      toast.error(eeror?.response?.data?.message)
    }


    // function changeheart(){
    //   return <i className='fa-solid fa-heart text-[1.3rem] cursor-pointer bg-red-500'></i>
    // }
     
   
      
  //  useEffect({
  //   if(isActive=true)
  //   {
  //     body.classlist.add('a')
  //   }
  //  },[])
    
  return (
    <div className='product lg:w-1/5 p-10   md:w-1/3 hover:shadow-2xl transition-all my-5 dark:bg-black dark:text-white'>
       <Link to={`/productdetails/${prod?.id}/${prod?.category._id}`}>
        <img src= {prod?.imageCover} alt="" className='w-full cursor-pointer' />
        </Link>
       <div className='flex justify-between my-3'>
       <p className='text-green-color'>{prod?.title}</p>
       {isLogin?<i className={`fa-solid fa-heart text-[1.3rem] cursor-pointer ${isActive===true?'active':''}`} onClick={()=>{muwished(prod?.id),setActive(!isActive)}}></i>:''}
       </div>
       
       <div className='flex justify-between my-3 '>
        <div>
        <p className={prod?.priceAfterDiscount?`text-slate-600 line-through`:''}>{prod?.price } EGP</p>
        <p className='text-slate-600'>{prod?.priceAfterDiscount? prod?.priceAfterDiscount + `EGP`:''}</p>
        </div>

         <p><i className='fa-solid fa-star text-rating-color'></i>{prod?.ratingsAverage} </p>
       </div>
     
         <button onClick={()=>{mutate(prod?.id)}} className='btn bg-green-300 hover:bg-green-400 transition-all px-3 py-1 rounded-full '>Add to Cart</button>
    </div>
  )
}
