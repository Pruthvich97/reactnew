import React from "react";

class DashBoardHooksClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username} = this.props.params
       
return(
    <>
    <h1>Hello {username}</h1>
    <p>Welcome Back!</p>
    
    </>
)
    } 
}
export default DashBoardHooksClass