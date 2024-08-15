import React from "react"
import "./hocStyles.css"
const hocComponent=(InputComponent)=>{
return class NewComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[],
            productList:[],
            searchItem:'',
      
        }
      }
      static getDerivedStateFromProps(props,state){
        return {productList:props.data}
      }
      handleInput=(e)=>{
        
        this.setState({searchItem:e.target.value})
        }
      handleSearch=(e)=>{
        e.preventDefault()
        const resultArray=this.state.productList.filter((item)=>item.pName===this.state.searchItem)
        this.setState({result:resultArray})
      }
      render(){
        const styles = {
          container: 'hoc-container',
          title: 'hoc-title',
          input: 'hoc-input',
          button: 'hoc-button',
          item: 'hoc-item',
        };
        return(
          <div className={styles.container}>
             <InputComponent result={this.state.result} handleInput={this.handleInput} handleSearch={this.handleSearch} styles={styles}></InputComponent>

          </div>
           
        )
      }
}
}
export default hocComponent