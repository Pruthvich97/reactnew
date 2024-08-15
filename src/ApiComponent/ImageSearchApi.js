import React from "react"
import axios from "axios"
class ImageSearchApi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:'',
            results:[]
        }
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);


        // axios.get(`https://api.unsplash.com/search/photos?query=${this.state.search}&client_id=eTqklbp1fLIfOYMFANBajMjHZs3mpdJlOWCXl5TdT68`).then((res)=>console.log(res))
        // .catch((err)=>console.log(err))
        axios.get(`https://api.unsplash.com/search/photos/?query=${this.state.search}&client_id=eTqklbp1fLIfOYMFANBajMjHZs3mpdJlOWCXl5TdT68`).then((res)=>{
            console.log(res);
            this.setState({results:res.data.results})
        })
        .catch((err)=>console.log(err))
    }
    render(){
        console.log(this.state.results);
        return(
            <>
                <h1> Search Any Image </h1>
                <form>
                <input type="text" placeholder="Enter any keyword" onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={(e)=>this.handleSubmit(e)}>Search</button>
                </form>
                {
                    this.state.results.map((item)=>(
                      <>
                        <img src={item.urls.small} alt="this is an img"></img>
                        <h1>This is a demo for api calls in react application</h1>
                        
                     </>
                    ))
                }
            </>
        )
    }
}

export default ImageSearchApi