import React from "react";
class AdminDash extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username,email,role,admin} = this.props.userdata;
        return(
        <>
        <h1>Hello {username}</h1>
        <h2>Email:{email}</h2>
        <h4>Role:{role}</h4>
        <button onClick={this.props.checkFunc}>Logout</button>
        </>
        )
    }
}   
export default AdminDash;