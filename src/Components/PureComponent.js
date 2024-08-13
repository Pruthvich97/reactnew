import React from "react";

class LifeCycleMethods extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:"inital"
        }
    }
}    