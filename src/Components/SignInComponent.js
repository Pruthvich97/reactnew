import React from "react";
class SignInComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <h1>Please Login</h1>
        <button onClick={this.props.toggleFunc}>Login</button>
        </>
        )
    }
}   
export default SignInComponent;