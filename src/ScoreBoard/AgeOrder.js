import React from "react";
import response from './data'
import './LeaderBoard.css'
import NavBarComponent from "./NavBarComponent";

class Age extends React.Component{
    constructor(props)
{
    super(props)
    this.state={
        data:response.list
    }
}
componentDidMount(){
    const sortedAge = [...this.state.data].sort((a, b) => a.age - b.age);
    this.setState({ data: sortedAge });
}
render(){
    return(
<>
<NavBarComponent keyword={3}></NavBarComponent>
<h2>Data in specific order of Age</h2>
<table>
<thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Age</th>
        <th>Points</th>
    </tr>
</thead>
<tbody>
    {
        this.state.data.map((item)=>(
            <tr>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.points}</td>
            </tr>
        ))
    }
</tbody>
</table>
</>
    )
}
}
export default Age;