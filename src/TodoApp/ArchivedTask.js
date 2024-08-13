import React from "react";
import _isEqual from "lodash/isEqual"

class ArchiedTask extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    console.log('Archived Tasks');
    return(
        <>
            {
            this.props.props1.map((item)=>(
            <div>
                <h2>{item.title}</h2>
                <h3>{item.desc}</h3>
            </div>
        ))
        }
        </>
    )
}
}

export default ArchiedTask;