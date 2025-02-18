import React, { useContext, useState } from 'react'
import useAddcart, { addProduct } from '../hooks/useAddcart'
import Loading from './Loading';
import useMutationCart, { clearCart, deleteCart, ubdateCart } from '../hooks/useMutationCart';
import EmptyCart from './EmptyCart';
import Paymen from './Paymen';
import { Helmet } from 'react-helmet';




export default function Cart() {
  // let {setNums} = useContext(numberItem)

  let{data} = useAddcart(addProduct)
  let{data:deletedItems,isLoading,mutate} = useMutationCart(deleteCart)
  let{data:clearditems,isSuccess,mutate:mutated} = useMutationCart(clearCart)
  let {data:ubdateitem,mutate:ubdatemuate,isPending} = useMutationCart(ubdateCart)
  let[isopen,setOpen] = useState(false)

  
  // console.log(data);
  
  // console.log(data?.data?.numOfCartItems);
  // console.log(data?.data?.data?.products);


  
  if(isLoading||isPending)
    {
      return <Loading></Loading>
    }

  if(data?.data?.numOfCartItems==0)
  {
    return<EmptyCart></EmptyCart>
  }

  // setNums(data?.data?.numOfCartItems)

  



  return (

<>
<Helmet>
        <meta charSet="utf-8" />
         <title>Cart</title>   
</Helmet>
  
  
    <div className='dark:bg-black  dark:xsm:h-screen dark:lg:h-auto  '>
   
   
    <div>
    <h1 className='text-center text-green-color text-[2.5rem] font-semibold dark:bg-black my-5 animate-bounce'>Cart</h1>
    </div>


    <div className=' lg:flex  '>
   <div className='lg:w-2/3'>
   <div className='dark:bg-black'>                        
    <div className="shadow-lg  relative xsm:overflow-x-auto sm:rounded-lg  ">

      <table className="shadow-lg w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          
    {/* <div className=' md:flex md:justify-around '> 
      <div className='xsm:w-44'>
      <h1 className='font-extrabold xsm:my-5 '>Number of Cart Items : <span className='text-green-color'>{data?.data?.numOfCartItems}</span></h1>
      <h1 className='font-extrabold xsm:my-5'>Total Cart Price : <span className='text-green-color'>{data?.data?.data?.totalCartPrice}</span> EGP</h1>
      </div>
     <div className='sm:flex items-center '> <button onClick={mutated} className='bg-red-500 text-white hover:bg-red-600 transition-all px-2 py-1 rounded-full'> Clear Items</button></div>
       </div> */}
    
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
    
          {data?.data?.data?.products.map((prod=>
          <tr key={prod?.product?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
              <img src= {prod?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
             {prod?.product?.title}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
    
                <button onClick={()=>{ubdatemuate({productId:prod?.product?._id,count:prod?.count-1})}} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                  </svg>
                </button>
    
                <div>
                  <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prod?.count} required />
                </div>
    
                <button  onClick={()=>{ubdatemuate({productId:prod?.product?._id,count:prod?.count+1})}}  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                  </svg>
                </button>
    
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
             {prod?.price} EGP
            </td>
            <td className="">
              <a href="#" onClick={()=>{mutate(prod?.product?._id)}} className=" font-medium text-red-600 dark:text-red-500 hover:underline bg-red-200 px-2 py-3 rounded-full hover:bg-red-300 sm:flex lg:inline-block">Remove <i className=' sm:flex sm:items-center lg:inline-block  fa-solid fa-trash'></i></a>
            </td>
          </tr>
          ))}
         
        </tbody>
      </table>
         
    
    </div>
     
    </div>
    
   </div>
     
     <div className='lg:w-1/3 dark:bg-black '>
      
       <div class="max-w-sm  bg-light-color border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white p-14 m-auto">
   
<h1 className='font-normal text-[1.5rem] text-center dark:text-white '>Cart Details</h1>




<div>
  <hr className="h-px my-5 bg-green-color border-0 dark:bg-green-color " />
   </div>

   <div className='flex justify-between mb-5'>
     <h1 className='font-bold  '>Number of Cart Items </h1>
     <span className='text-green-color font-bold text-[1.2rem]'>{data?.data?.numOfCartItems}</span>
    </div>
   <div className='flex justify-between'>
     <h1 className='font-bold  '>The Seller </h1>
     <span className='text-green-color font-bold text-[1rem]'>FreshCart</span>
    </div>
  

   <div className='flex justify-center'>
  <hr className="h-px my-8 bg-green-color border-0 dark:bg-green-color w-52 " />
   </div>


    <div className='flex justify-between'>
     <h1 className='font-bold '>Total Cart Price </h1>
     <span className='text-green-color font-bold text-[1.2rem]'>{data?.data?.data?.totalCartPrice} <sup>EGP</sup></span>   
    </div> 
  
    <div className='flex justify-between my-4'>
     <h1 className='font-bold  '>Delivrey Fee </h1>
     <span className='text-green-color font-bold text-[1.2rem]'>80 <sup>EGP</sup></span>
    </div>
    
    <div className='sm:flex sm:items-end justify-center  '> <button onClick={mutated} className='bg-red-500 text-white hover:bg-red-600 transition-all px-2 py-1 rounded-full'> Clear Cart</button></div>
     </div>

     </div>
    </div>

    <div className='flex justify-center  dark:bg-black'>
      <button onClick={()=>{setOpen(!isopen)}}  className=' my-6 bg-green-color text-white hover:bg-green-700 transition-all px-2 py-1 rounded-full'>Pay Online</button>
      </div>
      <div>
        {isopen?<Paymen cartId={data?.data?.cartId}/>:''}
    
    
      </div>



    </div>

</>

 
  )
}
