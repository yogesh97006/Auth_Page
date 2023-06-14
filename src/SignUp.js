import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "./UseContextAuth"

function SignUp(){
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [Error,setError]=useState('')
    const {SignUp} = useUserAuth()

    const Navigate=useNavigate()
  
    const handleChange= async (e)=>{
              e.preventDefault()
              try{
                await SignUp(Email,Password)
                Navigate('/')
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
            <input type='Password' onChange={e=>setPassword(e.target.value)} />
         </div>
         <Button type="submit">Sign Up</Button>
         <h3><Link to={'/'}>Already Have an Account! SignIn</Link></h3>
        </Form>
    )
}

export default SignUp