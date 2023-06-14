import { Alert, Button, Form } from "react-bootstrap"
import { useState } from "react"
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import {useUserAuth} from './UseContextAuth'

function SignIn(){
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [Error,setError]=useState('')
    const {SignIn} = useUserAuth()

    const Navigate=useNavigate()
  
    const handleChange= async (e)=>{
              e.preventDefault()
              try{
                await SignIn(Email,Password)
                Navigate('/Home')
              }
              catch (err){
                setError(err.massage)
              }
    }
    return(
        <Form style={{width:400}} onSubmit={handleChange} >
            {Error && <Alert variant="Danger">{Error}</Alert>}
            <div className="d-flex justify-content-between my-5">
            <label>Email :</label>
            <input type='email' onChange={e=>setEmail(e.target.value)} />
         </div>
         <div className="d-flex justify-content-between my-5">
            <label>Password :</label>
            <input type='Password'  onChange={e=>setPassword(e.target.value)}/>
         </div>
         <Button type='submit'>Sign In</Button>
         <h3><Link to={'/SignUp'}>Create! Your Account</Link></h3>
        </Form>
    )
}


export default SignIn