import React from "react"
import { Outlet } from "react-router-dom"
class User extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <>
            <h1>This is ABC Company</h1>
            <p>This is a Fast growing company in 2024 in fortune 500 companies</p>     
            <Outlet></Outlet>    
            </>
        )
    }
}
export default User
