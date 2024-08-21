import React from "react"
import { useNavigate } from "react-router-dom"
import LoginPageClass from "./LoginPageClass"


function LoginPageFunctional(){
    const navigate= useNavigate()
    return(
        <>
        <LoginPageClass navigate={{navigate}}></LoginPageClass>
        
        </>
    )
}

export default LoginPageFunctional