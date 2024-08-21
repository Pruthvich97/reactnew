import React from "react";
import response from './data'
import './LeaderBoard.css'
import NavBarComponent from "./NavBarComponent";

class Rank extends React.Component{
    constructor(props)
{
    super(props)
    this.state={
        data:response.list
    }
}
componentDidMount(){
    const sortedRank = [...this.state.data].sort((a, b) => a.rank - b.rank);
    ///sorted rank
    console.log(sortedRank);
    this.setState({ data: sortedRank });
}
render(){
    return(
<>
<NavBarComponent keyword={1}></NavBarComponent>
<h2>Data in specific order of Rank</h2>
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
export default Rank;