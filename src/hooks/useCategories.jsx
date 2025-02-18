


import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useCategories() {

    function categoriesFeature(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    }

   return useQuery({
        queryKey:['categories'],
        queryFn:categoriesFeature,
    })

}
