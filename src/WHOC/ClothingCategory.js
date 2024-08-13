import React from  "react"
import hocComponent from "./hocComponent"
class ClothingCategory extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){
        const {result,handleInput,handleSearch} = this.props
        return(
            <>
                <h1>Clothing Products</h1>
                <form>
                   Enter the Brand Name: <input type="text" onChange={(e)=>handleInput(e)}></input>
                   <button onClick={(e)=>handleSearch(e)}>Search</button>
                </form>
                <div>
                    {
                        result.map((item)=>(
                            <>
                                <h1>Product Name: {item.pName}</h1>
                                <p>Price:{item.price}</p>
                                <p>Manufacturer:{item.manufacturer}</p>
                                <p>Expected Delivery by:{item.expectedDelivery}</p>
                            </>
                
                        ))
                    }
                </div>
            
            </>
        )
    }
}
export default  hocComponent(ClothingCategory)