import React from "react";
import DashBoard from "./DashBoard";
import SignInComponent from "./SignInComponent";

class LoginUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLogged:false,
           users:{
            username:"pruthvi",
            role:"Engineer"
           }
        }
    }
    toggleUser=()=>{
       this.setState({isLogged:!(this.state.isLogged)})
    }
    render(){
        return(
            <>
                {
                    this.state.isLogged?
                    <>
                    <DashBoard userdata={this.state.user} toggleFunc={this.toggleUser}></DashBoard>
                    </>:<>
                   <SignInComponent toggleFunc={this.toggleUser}></SignInComponent>
                    </>
                }
            </>
        )
    }
}    
export default LoginUser;