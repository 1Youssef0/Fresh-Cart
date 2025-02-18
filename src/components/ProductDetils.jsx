import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Items from './Items';
import useMutationCart, { addCart } from '../hooks/useMutationCart';
import toast from './../../node_modules/react-hot-toast/src/index';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import { Helmet } from 'react-helmet';

export default function ProductDetils() {

    let {id,catId} =useParams()
    let [imgSrc,setImg] = useState('')
    let [ind,setInd] = useState(null)

    function getdataobj(){
        return  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)   
    }

    let {data:dataobj,isLoading} = useQuery({
      queryKey:['Product',id],
      queryFn:getdataobj,
      select:(dataobj)=>dataobj?.data?.data,
       refetchInterval:false,
       refetchOnMount:false,
       refetchOnWindowFocus:false,
       
    })

    console.log('print');
    
   function getRelated(){  
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${catId}`)
    }

    let {data:related} = useQuery({
      queryKey:['related',catId],
      queryFn:getRelated,
      select:(related)=>related?.data?.data,
      refetchOnMount:false,
      refetchOnWindowFocus:false,
      

    })
  
  
    function changeSrc(e){
        setInd(e.target.getAttribute('index'));
       setImg( e.target.src )
    }



    let {data,mutate,error,isError ,isSuccess} = useMutationCart(addCart)
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

    if(isLoading)
    {
      return <Loading></Loading>
    }
 




  return (

<>

<Helmet>
        <meta charSet="utf-8" />
         <title>ProductDetails</title>   
</Helmet>


    <div className=' dark:bg-black dark:text-white'>
        <div className='flex gap-10  my-10'>
            <div className="w-1/3">
            <img src={imgSrc ? imgSrc:dataobj?.imageCover} className=' xsm:w-full md:h-[470px]  object-cover' alt="" />
            <div className='flex gap-4  my-1 flex-wrap'>
                {dataobj?.images?.map((img,index)=><img key={index} src={img} className={`xsm:w-[20%]   cursor-pointer ${index==ind ?`border-green-200 border-opacity-65 border-2  opacity-100 transition-all `:'opacity-40'}`} index ={index} onClick={changeSrc}/>)}
            </div>

            </div>

            <div className="w-2/3  md:my-28 ">
              <h1 className='font-bold text-[1.5rem] '>{dataobj?.title}</h1>
              <p className='text-slate-600  my-3'>{dataobj?.description}</p>
              <p className='text-green-color my-4'>{dataobj?.category?.name}</p>

              <div className=' flex justify-between my-4'>
               <div> <p>{dataobj?.price} EGP</p> </div>

               <div className='flex'>
               <i className="fa-solid fa-star text-rating-color m-1"></i>
                <p>{dataobj?.ratingsAverage}</p>
               </div>
              </div>

               <button onClick={()=>mutate(id)} className='bg-green-color hover:bg-green-600 w-full text-white py-1'> + add to cart</button>

            </div>
        </div>

        <h1 className='font-extrabold text-3xl text-center '>Related Items<i className="mx-3 fa-solid fa-arrow-down text-green-color"></i></h1>

        <div className="flex flex-wrap dark:bg-black">

            {related?.map(prod=><Items key={prod._id} prod ={prod}></Items>)}
        </div>
      
    </div>
</>


  )
}
