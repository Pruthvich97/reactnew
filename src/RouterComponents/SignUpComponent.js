import React from "react";

class SignUpComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       
return(
    <>
    <h1>New User?</h1>
    <h2>Register here!</h2>
    <form>
        UserName: <input type="text"></input>
        email:<input type="email"></input>
    </form>
    
    
    </>
)
    } 
}
export default SignUpComponent