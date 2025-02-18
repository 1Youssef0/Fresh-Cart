import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import logo from '../assets/images/freshcart-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { usertoken } from '../context/UserToken'




export default function Navbar() {
 
 
          // let {NumsItems} = useContext(numberItem)

       let {isLogin,setLogin} = useContext(usertoken)

       let navigate = useNavigate()

       function logout(){

        localStorage.removeItem('token')  
        setLogin(null)
        navigate('/')
       }


      let ref = useRef(null) 


        useEffect(()=>{
          if( localStorage.getItem('theme')){
           {
            document.body.classList.add('dark'),
            ref.current.checked=true
           }
          }
        },[]) 

       function toggleMe(){
               
        let body = document.body;
       if(ref.current.checked)
       {
        body.classList.add('dark')
        localStorage.setItem('theme','dark')
       }
       else{
        body.classList.remove('dark')
        localStorage.removeItem('theme')
       }
       

       }
     
       
        // let [isClicked,setIsClicked] = useState(false)
       

  return (
  

<nav className="bg-light-color border-gray-200 dark:bg-black ">
  <div className="lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8" alt="Logo" />
    
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" >
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className=" w-full lg:flex lg:w-[85%] justify-between " id="navbar-default" >
      <ul className=" font-medium flex flex-col p-4 lg:p-0 mt-4 border lg:flex-row lg:space-x-3 rtl:space-x-reverse lg:mt-0 lg:border-0 ">
        <li>
          <Link to={'/'}  className="  block py-2 px-3 text-slate-400 hover:text-green-color  dark:text-white dark:hover:text-green-500  transition-all focus:text-green-color dark:focus:text-green-color "  aria-current="page">Home</Link>
        </li>
        <li>
          <Link to={'/products'} className="block py-2 px-3 text-slate-400 hover:text-green-color  dark:text-white dark:hover:text-green-500 transition-all focus:text-green-color dark:focus:text-green-color ">Products</Link>
        </li>
        <li>
          <Link to={'/categories'} className="block py-2 px-3 text-slate-400 hover:text-green-color  dark:text-white dark:hover:text-green-500 transition-all  focus:text-green-color dark:focus:text-green-color ">Categories</Link>
        </li>
        <li>
          <Link to={'/brands'} className="block py-2 px-3 text-slate-400 hover:text-green-color  dark:text-white dark:hover:text-green-500 transition-all  focus:text-green-color dark:focus:text-green-color ">Brands</Link>
        </li>
       
       {isLogin?  <li>
          <Link to={'/wishlist'} className="block py-2 px-3 text-slate-400 hover:text-green-color  dark:text-white dark:hover:text-green-500 transition-all focus:text-green-color dark:focus:text-green-color  ">Wishlist</Link>
        </li>:''}
        {isLogin ?<li>
          <Link to={'/cart'} className="block py-2 px-3 text-slate-400 hover:text-green-color  dark:text-white dark:hover:text-green-500 transition-all focus:text-green-color dark:focus:text-green-color  ">Cart </Link>
        </li>:''}
      </ul>




      <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border  lg:flex-row  rtl:space-x-reverse lg:mt-0 lg:border-0   ">
       
      {isLogin?<li className="block py-2 px-3 text-slate-500 hover:text-green-color dark:text-white dark:hover:text-green-500  transition-all focus:text-green-color dark:focus:text-green-color ">
      <i className="fa-solid fa-user text-[1.3rem]"></i>
        </li>:''}

       {isLogin? <li onClick={logout}>
          <a href="#" className="block py-2 px-3 text-slate-500 hover:text-green-color dark:text-white dark:hover:text-green-500 transition-all focus:text-green-color dark:focus:text-green-color  ">Logout</a>
        </li>:

          <>
           <li>
          <Link to={'/login'} className="block py-2 px-3  text-slate-500  hover:text-green-color dark:text-white dark:hover:text-green-500  transition-all focus:text-green-color dark:focus:text-green-color " aria-current="page">Login</Link>
        </li>
        <li>
          <Link to={'/register'} className="block py-2 px-3 text-slate-500 hover:text-green-color dark:text-white dark:hover:text-green-500 transition-all focus:text-green-color dark:focus:text-green-color  ">Register</Link>
        </li>
          
          </>
        
        }
        <li>
          <a href="" className="block py-2 px-3 text-slate-500 hover:text-red-500  dark:text-white dark:hover:text-red-500 transition-all"><i className='fa-brands fa-instagram'></i></a>
        </li>
        <li>
          <a href="" className="block py-2 px-3 text-slate-500 hover:text-red-700 dark:text-white dark:hover:text-red-700 transition-all"><i className='fa-brands fa-youtube'></i></a>
        </li>
        <li>
          <a href="" className="block py-2 px-3 text-slate-500 hover:text-blue-600 dark:text-white dark:hover:text-blue-600 transition-all"><i className='fa-brands fa-facebook'></i></a>
        </li>
        <li>
    
<label className="inline-flex items-center cursor-pointer my-2" >
  <input type="checkbox" defaultValue className="sr-only peer " onChange={toggleMe} ref={ref}/>
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-transparent dark:peer-focus:ring-transparent dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 dark:peer-checked:bg-green-600" />
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
</label>


        </li>
      </ul>
    </div>
  </div>
</nav>




  )
}
