import { createContext, useContext, useEffect, useState } from "react";






export let usertoken = createContext(null)

export default function UserTokenProvider({children}){

      
    let[isLogin,setLogin] = useState(null)

    useEffect(()=>{
        
        if(localStorage.getItem('token'))
            setLogin(localStorage.getItem('token'))
    },[])
    
    
    return <usertoken.Provider value={{isLogin,setLogin}} >
        
      <div>  {children} </div>

    </usertoken.Provider>
}
