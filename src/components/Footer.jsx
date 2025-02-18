import React from 'react'

export default function Footer() {

    
  return (
    <div className='bg-light-color h-96 dark:bg-slate-950 xsm:hidden lg:block'>

       <div className="container my-14">
         

       <h1 className='text-xl dark:text-white'>Get the FreshCart app</h1>
        <p className='text-slate-500 my-1 '>We will send you a link, open it on your phone to download the app.</p>
        <div className='flex'>
            <div className="xsm:w-full  md:w-2/3">
            <input type="email" id="email" className="my-4 w-full dark:bg-slate-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Email..." required />
            </div>
            <div className="xsm:w-full  md:w-1/3">
             <button className='bg-green-color hover:bg-green-700 px-3 py-2 w-56 text-white rounded-lg mx-7 my-4 block '>Share App Link</button>
            </div>
        </div>
        <hr className="h-px my-8  border-0 dark:bg-gray-300 bg-gray-300"></hr>


        <div className='flex justify-between '>

          <div className="lg:w-1/2 flex justify-start ">
          <div className='flex dark:text-white'>
             <p className='font-semibold'>Payment Partners :</p>
             <i className="mx-4  cursor-pointer  font-bold text-2xl fa-brands fa-amazon-pay hover:text-orange-300"></i>
             <i className="mx-4  cursor-pointer  font-bold text-2xl fa-brands fa-paypal hover:text-blue-700"></i>
             <i className="mx-4  cursor-pointer  font-bold text-2xl fa-brands fa-google-pay hover:text-red-400"></i>
             <i className="mx-4  cursor-pointer  font-bold text-2xl fa-brands fa-cc-mastercard hover:text-orange-400"></i>
            </div>

          </div>



         <div className="lg:w-1/2 xsm:w-full flex justify-center">
         <div className='flex dark:text-white'>
                <p className='font-semibold'>Get delivires with <span className='text-green-color'>FreshCart</span></p>
                <i className="fa-solid fa-arrow-trend-down text-2xl mx-3 hover:translate-x-3 transition-all"></i>
                {/* <i className="mx-4  cursor-pointer font-bold text-2xl fa-brands fa-google-play"></i>
                <i className="mx-4  cursor-pointer font-bold text-2xl fa-brands fa-apple"></i> */}

<div className=" space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mx-8 ">
  <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-3 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
    <div className="text-left rtl:text-right">
      <div className="mb-1 text-xs">Download on the</div>
      <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
    </div>
  </a>
  <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-3 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
    <div className="text-left rtl:text-right">
      <div className="mb-1 text-xs">Get in on</div>
      <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
    </div>
  </a>
</div>

            </div>

         </div>

        </div>

        <hr className="h-px my-8  border-0 dark:bg-gray-300 bg-gray-300"></hr>

       </div>
    </div>
  )
}
