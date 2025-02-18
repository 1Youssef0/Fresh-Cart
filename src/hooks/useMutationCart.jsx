import { useMutation } from "@tanstack/react-query"
import axios from "axios"





let token = localStorage.getItem('token')

 //send item to cart
export function addCart(productId){
 return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId},{headers:{token}})} 

//delete item from cart
export function deleteCart(productId){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers:{token}})} 

//clear cart
export function clearCart(productId){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{token}})} 

  //ubdate item from cart
export function ubdateCart({productId,count}){
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{headers:{token}})} 

 


export default function useMutationCart(fn) {

      return useMutation({mutationFn:fn})
      




}
