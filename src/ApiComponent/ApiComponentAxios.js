import React from "react";
import axios from "axios";

class ApiComponentAxios extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[] 

        }
    }
    componentDidMount(){
        // fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({results:res})).catch((err)=>console.log(err));

        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err));
    }
    render(){
        return(
            <>
            {
                  this.state.results.map((item)=>(
                    <>
                        <h1>Name: {item.name}</h1>
                        <h3>UserName: {item.username}</h3>
                        <p>Email: {item.email}</p>
                    </>

                  ))

            }
              
            </>
        )
    }
}
export default ApiComponentAxios;