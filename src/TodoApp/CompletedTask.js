import React from "react";
import _isEqual from "lodash/isEqual"
class CompletedTask extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps){
        if(_isEqual(nextProps.prop1,this.props.prop1)){
            return false
        }
        else{
            return true
        }
    }
render(){

   console.log('completed Tasks');
    return(
    <>
    <h1>Completed Tasks</h1>
    {
        this.props.props1.map((item)=>(
            <div>
                <h2>{item.title}</h2>
                <h3>{item.desc}</h3>
                <button onClick={()=>this.props.props2(item.id)}>Undo</button>
                <button onClick={()=>this.props.props3(item.id)}>delete</button>
            </div>
        ))
    }
    </>
    )
}
}

export default CompletedTask;