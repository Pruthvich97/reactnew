import React from "react";
class SimpleState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:"Pruthvi"
        }

    }
    changeData=()=>{
        console.log("change data is called")
        // this.state.data = "final" =>wrong change it will not update;
        this.setState({data:"Raj"})

    }
    render=()=>{
        {console.log("render")}
        return(
            <>
                <h1>States Demo</h1>
                <h2>{this.state.data}</h2>
                <button onClick={this.changeData}>change</button>
            </>
        )
           
    }
}
export default SimpleState;