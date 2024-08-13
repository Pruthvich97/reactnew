import React from "react";
import AdminDash from "./AdminDash";
import AdminSignIn from "./AdminSignIn";

class AdminCheck extends React.Component{
    constructor(props){
        super(props)
        this.state={
           users:[
            {
                username:"Pruthvi Raj",
                email:"pruthvi.ch98@gmail.com",
                role:" Software Engineer",
                admin:true
            }
           ]
        }
    }
    checkUser=()=>{
        const updatedUsers = [...this.state.users];
        console.log(this.state.users);
        console.log(updatedUsers);
        updatedUsers[0].admin = !updatedUsers[0].admin;
       this.setState({users: updatedUsers});
       
    }
    render(){
        return(
            <>
                {
                    this.state.users[0].admin?
                    <>
                    <AdminDash userdata={this.state.users[0]} checkFunc={this.checkUser}></AdminDash>
                    </>:<>
                   <AdminSignIn toggleFunc={this.checkUser}></AdminSignIn>
                    </>
                }
            </>
        )
    }
}    
export default AdminCheck;