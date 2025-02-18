import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


//forget-password
export function forgetPass(email){
    return axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',{email})
    }

//verify-reset.code
export function verifyCode(resetCode){
    return axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',{resetCode})
    }

//reset-password
export function resetPass({email,newPassword}){
    return axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',{
    email,
    newPassword
});
}    


export default function usemutationForget(fn) {

return useMutation({
    mutationFn:fn
})

}
