import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useSpecificCat() {

    function getSpecifcCat(_id){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${_id}`)
    }
    useQuery({
        queryKey:['specific'],
        queryFn:getSpecifcCat
    })

}
