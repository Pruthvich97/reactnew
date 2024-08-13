import React from "react";

class SimpleClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.fname = 'peter'
    }
    changeName=()=>{
        this.fname="peter"
        console.log("inside fnc",this.fname)
    }
    render(){
       
        return(
            <>
            <h2>Hello {this.fname}</h2>
            <button onClick={this.changeName}></button>
            </>
        )
    }
}