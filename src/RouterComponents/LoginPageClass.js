import axios from "axios";
import React from "react";
class LoginPageClass extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            email:'',
            unameErr:"",
            emailErr:''
        }
    } 
   
    handleSubmit=(e)=>{
        e.preventDefault()
        const {navigate} = this.props.navigate
        axios.get(`http://localhost:3001/ContactDetails?ename=${this.state.username}`).then((res)=>{
            const result=res.data[0]
            console.log(result)
            if(!response){
                navigate('/signUp')
            }
            if(result.email===this.state.email){
                navigate(`/dashboard/${this.state.username}`)
            }
            else{
                navigate('/error')
            }
        })
        
      
    }
    handleValidation=(e,keyword)=>{
        if(keyword==="username"){
            if(e.target.value){
                /** state is set */
                this.setState({username:e.target.value})
            }
            else{
                /**error message */
                this.setState({unameErr:"please enter username"})
            }
        }
        if(keyword==="email"){
            if(e.target.value){
                /** state is set */
                this.setState({email:e.target.value})
            }
            else{
                /**error message */
                this.setState({emailErr:"please enter email"})
            }
        }
    }
    render(){
        return(
            <>
            <form>
              Username:  <input type="text" onBlur={(e)=>this.handleValidation(e,"username")}></input>
              <p style={{color:"red"}}>{this.state.unameErr}</p>
              email:  <input type="text" onBlur={(e)=>this.handleValidation(e,"email")}></input>
              <p style={{color:"red"}}>{this.state.emailErr}</p>
              <button onClick={(e)=>this.handleSubmit(e)}>submit</button>
            </form></>
        )
    }
}
export default LoginPageClass