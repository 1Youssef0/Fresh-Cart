import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoriesDetails() {



    let {id} = useParams()

    function catDetails(){
     return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    }



    let {data} = useQuery({
        queryKey:['catdetails'],
        queryFn:catDetails,
        select:(data)=>data?.data?.data
    })


  return (
<>
<div className='flex' >
        <div className="w-1/3">
        <img src={data?.image} alt="" className='' />
        </div>
        <div className="w-2/3 flex flex-col justify-center mx-10 p-5">
        <h1 className=' font-extrabold my-5'>Category Name : <span className='text-green-color'>{data?.name}</span></h1>
        <h3 className='text-slate-700 font-semibold my-2'>{data?.slug}</h3>
        <p className='font-extrabold my-2'>Created Date : <span className='text-slate-700'>{data?.createdAt}</span></p>
        <p className='font-extrabold my-2'>ubdate Date : <span  className='text-slate-700'>{data?.updatedAt}</span></p>

        </div>
    </div>






</>
  )
}
