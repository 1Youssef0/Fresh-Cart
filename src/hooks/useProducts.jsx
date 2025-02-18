import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useProducts() {

    
        function productsFeature(){
          return axios.get('https://ecommerce.routemisr.com/api/v1/products')
        }
    
           return useQuery({
              queryKey : ['products'],
              queryFn : productsFeature,
              select : (data)=> data?.data?.data,
              refetchInterval:100,
              
              
            })
}
