import React from "react";
class FilterClothingProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[],
            productsList:[],
            searchItem:''
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productsList:props.data}
    }
    handleInput=(e)=>{
        this.setState({searchItem:e.target.value})
    }
    handleSearch=(e)=>{
        e.preventDefault();
        const resultArray = this.state.productsList.filter((item)=>item.pName===this.state.searchItem)
        this.setState({result:resultArray})
    }
    render(){
        console.log(this.state.result);
        return(
            <>
                <h1>Clothing Products</h1>

                <form>Enter Product name:  <input type="text" onChange={(e)=>this.handleInput(e)}></input>
                    <button onClick={(e)=>this.handleSearch(e)}>Search</button>
                </form>
                <div>
                    {
                        this.state.result.map((item)=>(
                            <>
                            <h1>Product Name:{item.pName}</h1>
                            <h3>Price: {item.price}</h3>
                            <p>Manufacturer: {item.manufacturer}</p>
                            <p>ExpectedDelivery: {item.expectedDelivery}</p>
                            </>
                            
                        ))}
                </div>
            </>
        )
    }
}
export default FilterClothingProducts;