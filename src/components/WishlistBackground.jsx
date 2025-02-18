import React from 'react'

export default function WishlistBackground() {
  return (
  <div className='dark:bg-black h-screen '>
  
  
 <div className='flex justify-center my-20'>
 <i class="fa-solid fa-heart-crack text-[5rem] text-red-600 animate-bounce"></i>
 </div>

  <div className='flex justify-center '>
    <h1 className=' font-extrabold text-[2.5rem] dark:text-white xsm:text-center '> There is Nothing In Your <span className='text-green-color'> Wishing List !!!</span> <i class="fa-solid fa-face-sad-tear dark:text-white"></i></h1>
    </div>
  </div>
  )
}
