import { useUserAuth } from "./UseContextAuth"
import { useNavigate } from "react-router-dom"


function Home(){
    const {User}=useUserAuth()
  
    const {logOut} =useUserAuth()
    const navigate=useNavigate()

  
    return(
        <div>
            <h1>Welcome ! {User.email}</h1>
        </div>
    )
}

export default Home