import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

let token = localStorage.getItem('token')

//get item in cart
export function addProduct(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{headers : {token}})
}

export default function useAddcart(fn) {
  
    return useQuery({
        queryKey : ['cart'],
        queryFn : fn,
        refetchInterval:500,
        
        refetchOnWindowFocus:false,
        

    })
    
}



