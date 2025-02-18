import{ useFormik } from 'formik'
import{ useNavigate } from 'react-router-dom'
import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { usertoken } from '../context/UserToken';
import image from '../assets/images/ipad wallpaper.jpeg'
import { Helmet } from 'react-helmet'

export default function Register() {




  let validationSchema = Yup.object().shape({

    name: Yup.string().min(2,'name must contain at least 2 char').max(8,'too long').required('this field is required'),
    email: Yup.string().email('invalid email address').required('this field is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{4,8}$/,`Start with upperCase and be from 4 to 8 characters`).required('this field is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')]).required('this field is required'),
    phone: Yup.string().matches(/(01)[0-25]/).required('this field is required'),


  })

  let{setLogin} = useContext(usertoken)
 let navigate = useNavigate()
  let[errMsg,seterrMsg] = useState('')
 

  async function handleRegister(values){

  try {
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)

    console.log(data);

    seterrMsg('');

    if(data.message==='success')
    
      {
        localStorage.setItem('token',data.token)
        navigate('/login')
        setLogin(values.token)

      }

  

  } catch (error) {

    seterrMsg('account already exist')
  }

    
    

  }


 
  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:'',
      token:'',
    },
    validationSchema
    ,
    onSubmit:handleRegister,
   
  })



  return (
   <>
     <Helmet>
        <meta charSet="utf-8" />
         <title>Register</title>   
</Helmet>

   <div className='dark:bg-black xsm:h-screen  '>
      
      <h1 className='text-[2.5rem] font-bold my-12 lg:mx-64 xsm:mx-6 text-green-color'>Register Now <i class="fa-solid fa-arrow-trend-down"></i></h1>

      

<form className="max-w-md mx-auto mb-7 " onSubmit={formik.handleSubmit}>

  <div className="relative z-0 w-full mb-5 group">
    <input type="text"  id="name" value={formik.values.name} onBlur={formik.handleBlur}  onChange={formik.handleChange} className=" dark:text-white   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />



    {formik.errors.name && formik.touched.name ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert">

  <div>
    <span className="font-medium">{formik.errors.name}</span>
  </div>
</div>:''}


    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name :</label>
  </div>




  <div className="relative z-0 w-full mb-5 group">
    <input type="email" id="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className=" dark:text-white  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />

    {errMsg ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert">

  <div>
    <span className="font-medium">{errMsg}</span>
  </div>
</div>:''}

{formik.errors.email && formik.touched.email ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert">

  <div>
    <span className="font-medium">{formik.errors.email}</span>
  </div>
</div>:''}





    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email :</label>
  </div>




  <div className="relative z-0 w-full mb-5 group">
    <input type="password" id="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="dark:text-white   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />


    {formik.errors.password && formik.touched.password ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert">

  <div>
    <span className="font-medium">{formik.errors.password}</span>
  </div>
</div>:''}
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Password :</label>
  </div>




  <div className="relative z-0 w-full mb-5 group">
    <input type="password"  id="rePassword" value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="dark:text-white  block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />


    {formik.errors.rePassword && formik.touched.rePassword ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert">

  <div>
    <span className="font-medium">{formik.errors.rePassword}</span>
  </div>
</div>:''}
    <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Confirm password :</label>
  </div>




  <div className="relative z-0 w-full mb-5 group">
    <input type="tel"  id="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} className="dark:text-white     block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />

    {formik.errors.phone && formik.touched.phone ?
    <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert">

  <div>
    <span className="font-medium">{formik.errors.phone}</span>
  </div>
</div>:''}

    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Phone :</label>
  </div>




  <button type="submit" className="text-white bg-green-color hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
</form>

      
      </div>
   </>
  )
}


