import { useUserAuth } from "./UseContextAuth"

function Home(){
    const {User}=useUserAuth()
  
    return(
        <div>
            <h1>Welcome ! {User.email}</h1>
        </div>
    )
}

export default Home