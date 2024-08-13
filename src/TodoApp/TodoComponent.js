import React from "react";
import PendingTask from "./PendingTask";
import CompletedTask from "./CompletedTask";
import ArchivedTask from "./ArchivedTask";


class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return{todos:props.data}
    }
    getCompletedtasks(){
        const completedTask =this.state.todos.filter((item)=>item.status===true && item.active===true);
        return completedTask;
    }
    getPendingtasks(){
        const pendingTask =this.state.todos.filter((item)=>item.status===false);
        return pendingTask;
    }
    getArchivedtasks(){
        const archivedTask = this.state.todos.filter((item)=>item.active===false);
        return archivedTask;
    }
    changeCompletionStatus=(todoId)=>{
        const temp=this.state.todos
        const obj=temp.find((item)=>item.id===todoId)
        obj.status=!obj.status
        this.setState({todos:temp})
     }
     changeActiveStatus=(todoId)=>{
        const temp=this.state.todos;
        const obj=temp.find((item)=>item.id===todoId)
        obj.active=!obj.active
        this.setState({todos:temp})
     }
     render(){

        {console.log(this.state.todos)}
        
        //Displays all the todo lists
        return(
        <>
        <CompletedTask props1={this.getCompletedtasks()} props2={this.changeCompletionStatus} ></CompletedTask>
        <PendingTask props1={this.getPendingtasks()} props2={this.changeCompletionStatus} props3={this.changeActiveStatus}></PendingTask>
        <ArchivedTask props1={this.getArchivedtasks()}></ArchivedTask>
        {/* <button onClick={()=>{this.changeCompletionStatus(1)}}>Test</button> */}
        
        </>
        )
    }
    }
    
 export default TodoComponent;
