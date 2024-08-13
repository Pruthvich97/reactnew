import React from "react";
class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            uname:"",
            pwd:""
        }
    }
    handleUname=(e)=>{
        this.setState({uname:e.target.value})
    }
    handlePwd=(e)=>{
        this.setState({pwd:e.target.value})
    }
    handleLogin=()=>{
        console.log(this.state.uname, this.state.pwd)
    }
}