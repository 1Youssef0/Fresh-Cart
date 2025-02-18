
import { useFormik } from 'formik'
import React from 'react'
import usemutationForget, { forgetPass } from '../hooks/usemutationForget'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'









export default function ForgetPassword() {



      let{data,mutate,error} = usemutationForget(forgetPass)
      let navigate = useNavigate()
      let validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('This field is required')
      })

    let formik = useFormik({
      initialValues:{
        email:''
      },
      validationSchema ,
      onSubmit:(values)=>mutate(values.email)
    })
    

    // console.log(data?.data?.statusMsg);

    if(data?.data?.statusMsg=='success')
    {
      navigate('/verify-pass')
    }


    

  return (
   <>
   <Helmet>
        <meta charSet="utf-8" />
         <title>ForgetPassword</title>   
   </Helmet>
        
   <div className='dark:bg-black xsm:h-screen lg:h-auto'>

<form className="max-w-md m-auto my-36  opacity-100" onSubmit={formik.handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
          <input type="email" id="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-50 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
      
         {error?
          <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert"> {error}  </div>:''}
      
          {formik.errors.email && formik.touched.email ? <div className="flex items-center p-2  my-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-800 dark:border-red-800" role="alert"> {formik.errors.email}</div>:''}
       
      
      
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email :</label>
        </div>


        <button  type="submit" className="text-white bg-green-color hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        </form>
    </div>
   </>
  )
}
