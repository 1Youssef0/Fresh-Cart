import axios from 'axios'
import Items from './Items';
import Loading from './Loading';
import { useQuery } from '@tanstack/react-query';
import useProducts from '../hooks/useProducts';

export default function Productfeature() {

  let {data,isLoading,isError,error} = useProducts()

        if(isLoading)
        {
          return<Loading></Loading>
        }
        if(isError)
        {
          return <h1>{error.message}</h1>
        }



  return (
    <div className=' p-30 dark:bg-black dark:text-white'> 
       <div className="flex flex-wrap"> {data?.map(prod=><Items key={prod._id} prod ={prod}></Items>)}</div>
    </div>
  )
}
