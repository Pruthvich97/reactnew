import { useNavigate } from "react-router-dom"
function LoginPageComponent(){
    let navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        navigate("/dashboard")
    }
    return(
        <>  
            {console.log(useNavigate)}
            <h1>LoginPage</h1>
            <button onClick={(e)=>handleLogin(e)}>Login</button>
        </>
    )
}

export default LoginPageComponent