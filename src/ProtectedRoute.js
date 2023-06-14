import { Navigate } from "react-router-dom"
import { useUserAuth } from "./UseContextAuth"

function ProtectedRoute({children}){

    const {User} =useUserAuth()
if(!User){
    return <Navigate path='/' />
}    
    return children
}

export default ProtectedRoute