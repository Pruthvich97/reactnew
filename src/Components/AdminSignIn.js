import React from "react";
class AdminSignIn extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <h1>Please Login</h1>
        <button onClick={this.props.checkFunc}>Login</button>
        </>
        )
    }
}   
export default AdminSignIn;