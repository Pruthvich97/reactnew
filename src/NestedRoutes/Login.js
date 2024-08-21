import React from "react"
import { Outlet } from "react-router-dom"
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tech:'',
            projects:'',
            agreement:false,
            selectErr:'',
            projectErr:'',
            agreemenrErr:'',
            successMsg:''

        }
    }
    handleChange=(e,keyword)=>{
        if(keyword==='tech'){
            this.setState({tech:e.target.value})
        }
        if(keyword==='project'){
            this.setState({projects:e.target.value})
        }
        else{
            this.setState({agreement:!this.state.agreement})
        }    
    }
    // handleBlur=(e,keyword)=>{
    //     if(!keyword){
    //         this.setState({unameErr:"Please select any one option"})

    //     }
    // }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.tech){
            this.setState({selectErr:""})
        }
        if(!this.state.tech){
            this.setState({selectErr:"Please select any one option"})
        }
        if(this.state.projects){
            this.setState({projectErr:""})
        }
        if(!this.state.projects){
            this.setState({projectErr:"please enter your projects"})
        }
        else{
            this.setState({successMsg:"Thankyou for Submitting your response!"})
        }   
    }
    render(){
        return(
            <>
            <form>
                <select  name="tech" onChange={(e)=>this.handleChange(e,"tech")} onblur={(e)=>this.handleChange(e,"tech")}>
                    <option value="">---Select---</option>
                    <option value="React JS">React JS</option>
                    <option value="Node JS">Node JS</option>
                    <option value="Mongo DB">Mongo DB</option>
                </select>
                <p style={{color:"red"}}>{this.state.selectErr}</p>
                <br></br>
            Add your experience:<textarea name="projects" cols="20" rows="10" onChange={(e)=>this.handleChange(e,"project")}>
            </textarea>
            <p style={{color:"red"}}>{this.state.projectErr}</p>
            <br></br>
           I Agree to the terms and condition <input type="checkbox" name="agreement" checked={this.state.agree} onChange={(e)=>this.handleChange(e,"agree")}></input>
           <p style={{color:"red"}}>{this.state.agreemenrErr}</p>
           <button onClick={(e)=>this.handleSubmit(e)}>submit</button>
           <h2 style={{color:"green"}}>{this.state.successMsg}</h2>
            </form>
            <Outlet></Outlet>
            </>
        
        )
    }
}    
export default Login