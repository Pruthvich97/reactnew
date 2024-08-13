import React from "react";
class SimpleCounter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    addValue=()=>{
        this.setState({
            count: this.state.count + 1
          });
    }
    subValue=()=>{
        this.setState({
            count: this.state.count - 1
          });
    }
    render(){
        return(
            <>
             <h1>Counter Application</h1>
             <h1>Count value: {this.state.count}</h1>
             <button onClick={this.addValue}>Add</button><br></br>
             <button onClick={this.subValue}>Sub</button>
            </>
           
        )
    }
}
export default SimpleCounter;