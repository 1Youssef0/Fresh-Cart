import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoiresItem({ele}) {



  return (
    <div className='dark:bg-black flex lg:container xsm:mx-1'>

      <div>
       <Link to={`/categoriesdetails/${ele._id}`}>
      <img src={ele?.image} alt="" className='h-[300px] my-10 object-cover cursor-pointer'/>
        </Link>
        <h2 className='text-green-color'>{ele?.name}</h2>
      </div>
    </div>
  )
}
