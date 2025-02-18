import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function ShowOrders() {



    function getPaidOrders(){
      return  axios.get('https://ecommerce.routemisr.com/api/v1/orders')
    }

    let {data} = useQuery({
        queryKey:['PaidOrders'],
        queryFn:getPaidOrders
    })

    console.log(data?.data);
    
  return (
    <div>

  

    </div>
  )
}
