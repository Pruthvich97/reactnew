import React from "react"
import hocComponent from "./hocComponent";

class ElectronicCategory extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {result,handleInput,handleSearch,styles}= this.props;
        console.log(this.props)
        console.log(result)
        return(
            <>
                <h1 className={styles.title}>Electronic Items</h1>
                <form>
                    Enter Product Name: <input type="text" onChange={(e)=>handleInput(e)}  className={styles.input}></input>
                    <button onClick={(e)=>handleSearch(e)} className={styles.button}>Search</button>
                </form>
                <div>
                    {
                        result.map((item)=>(
                            <div className={styles.item}>
                                <h2>Product Name: {item.pName}</h2>
                                <p>Price:{item.price}</p>
                                <p>Manufacturer:{item.manufacturer}</p>
                                <p>Expected Delivery by:{item.expectedDelivery}</p>
                            
                            </div>
                        ))
                    }
                </div>
            
            </>
        )
    }
}
export default hocComponent(ElectronicCategory)