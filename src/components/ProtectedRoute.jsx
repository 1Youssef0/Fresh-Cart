import React from 'react'

export default function ProtectedRoute({children}) {
 
  
        if(localStorage.getItem('token'))
            return children
}
