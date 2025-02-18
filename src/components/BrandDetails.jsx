import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
// import img from '../assets/images/download.jpeg'

export default function BrandDetails() {

    let {id} = useParams()

    console.log(id);
    

    function specificBrand(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    }
    let {data} = useQuery({
    queryKey:['onebrand'],
    queryFn:specificBrand,
    select:(data)=>data?.data?.data
    })
   
    

   
    
  return (
    <div className=' container flex justify-center  h-screen '>
      <div className=''>
      <img src={data?.image} alt="" className='m-auto opacity-75' />
      <h1 className='font-extrabold text-[1.5rem] my-4'>Brand: <span className='text-green-color'>{data?.name}</span></h1>
      <p className='font-extrabold text-[1.5rem] my-6'>Created At : <span className='text-green-color'>{data?.createdAt}</span> </p>
      <p className='font-extrabold text-[1.5rem] my-6'>Updated At : <span className='text-green-color'>{data?.updatedAt}</span> </p>
      

      </div>
    </div>
  )
}
