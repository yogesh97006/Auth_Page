import { Button } from "react-bootstrap"
import { useUserAuth } from "./UseContextAuth"
import { useNavigate } from "react-router-dom"
import {  useState } from "react"

function Home(){
    const {User}=useUserAuth()
    // const [Error,setError]=useState('')
    const {logOut} =useUserAuth()
    const navigate=useNavigate()

    const handleButton=async ()=>{
        try{
            await logOut()
            navigate('/')
        }
        catch(error){
            console.log(error.message)
        }
    }
    return(
        <div>
            <h1>Welcome ! {User.email}</h1>
            {/* {Error} */}
            {/* <Button onClick={handleButton}>Log Out</Button> */}
        </div>
    )
}

export default Home