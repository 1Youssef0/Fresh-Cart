import{ useFormik } from 'formik'
import{ Link, useNavigate } from 'react-router-dom'
import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import values from './../../node_modules/lodash-es/values';
import * as Yup from 'yup'
import { usertoken } from '../context/UserToken';
import image from '../assets/images/ipad wallpaper.jpeg'
import { Helmet } from 'react-helmet';


export default function Login() {



  let validationSchema = Yup.object().shape({

 
    email: Yup.string().email('invalid email address').required('this field is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{4,8}$/,`Start with upperCase and be from 4 to 8 characters`).required('this field is required'),


  })


  let{setLogin} = useContext(usertoken)
 let navigate = useNavigate()
  let[errMsg,seterrMsg] = useState('')
 

  async function handlelogin(values){

  try {
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)

    console.log(data);

    seterrMsg('');

    if(data.message==='success')
    
     {
      localStorage.setItem('token',data.token)
      navigate('/products'); 
      setLogin(data.token);
     }

    

  } catch (error) {

    seterrMsg('invalid email or pasword')
  }

    
    

  }


 
  let formik = useFormik({
    initialValues:{
  
      email:'',
      password:'',
      token:'',
    
    },
    validationSchema
    ,
    onSubmit:handlelogin,
   
  })



  return (

<>


<Helmet>
        <meta charSet="utf-8" />
         <title>Login</title>   
</Helmet>


    <div className='dark:bg-black xsm:h-screen '>
   


   <h1 className='text-[2.5rem] font-bold my-16 lg:mx-64 text-green-color xsm:flex xsm:mx-10 '>Login Now <i class="xsm:flex xsm:items-center xsm:mx-4 fa-solid fa-arrow-trend-down"></i></h1>

<form className="max-w-md m-auto mb-16  opacity-100" onSubmit={formik.handleSubmit}>



  <div className="relative z-0 w-full mb-5 group">
    <input type="email" id="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-50 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />

    {errMsg ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert"> {errMsg} </div>:''}

    {formik.errors.email && formik.touched.email ? <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert"> {formik.errors.email}</div>:''}



    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email :</label>
  </div>




  <div className="relative z-0 w-full mb-5 group">
    <input type="password" id="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-50 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />


    {formik.errors.password && formik.touched.password ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert">

  <div>
    <span className="font-medium">{formik.errors.password}</span>
  </div>
</div>:''}


    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Password :</label>
  </div>





  <div className=' lg:flex lg:justify-between'>

<div className='lg:my-4'>
<button type="submit" className="text-white bg-green-color hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm xsm:w-full lg:w-20 lg:py-2.5  xsm:py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
</div>

  <Link to={'/forget-password'} >
  <span className='xsm:flex xsm:my-6 sm:block  text-black dark:text-white  dark:hover:text-green-color  hover:text-green-color transition-all cursor-pointer text-[1.1rem] font-semibold'>Forget Your Password ?</span>
  </Link>
  </div>
</form>

      
      </div>

</>

  )
}


