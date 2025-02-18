import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'




let token = localStorage.getItem('token')

//Add WishList
export function addwish(productId){
    return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{productId},{headers:{token}})}

//delete WishList
export function deletewish(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers:{token}})}

export default function useMutationWishlist(fn) {

   return useMutation({
    mutationFn:fn,
    
   })

}
