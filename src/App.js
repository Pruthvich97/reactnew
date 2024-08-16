// import TodoComponent from "./TodoApp/TodoComponent.js"
// import data from "./TodoApp/data.js";
// import ClothingCategory from "./WHOC/ClothingCategory.js";
// import ElectronicCategory from "./WHOC/ElectronicCategory.js";
// import clothing from "./WOHOC/Clothing.js";
// import FilterClothingProducts from "./WOHOC/FilterClothingProducts.js";
// import FilterElectronicProducts from "./WOHOC/FilterElecronicProducts.js";
// import electronics from "./WOHOC/electronics.js";
// import ApiComponent from "./ApiComponent/ApiComponent.js"
// import ApiComponentAxios from "./ApiComponent/ApiComponentAxios.js";
// import ImageSearchApi from "./ApiComponent/ImageSearchApi.js";
import FormElements from "./FormComponents/FormElements.js";

// import EmployeeManager from "./ContactManager/EmployeeManager.js";
// import Home from "./Routes/Home.js"
// import About from "./Routes/About.js"
// import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
      {/*WithOut Higher Order functions */}
      {/* <FilterClothingProducts data={clothing}></FilterClothingProducts> */}
      {/*With Higher Order functions */}
      {/* <ClothingCategory data={clothing}></ClothingCategory> */}
      {/* <ElectronicCategory data={electronics}></ElectronicCategory> */}
     {/* <ImageSearchApi></ImageSearchApi> */}
     <FormElements></FormElements>
     {/* <BrowserRouter>
     <Link to="/home">Home App</Link>
     <Link to="/About">About Page</Link>
     <Link to="/imagesearch">Imagesearch</Link>
     <Routes>
      <Route path='/home' element={<Home></Home>} ></Route>
      <Route path='/About' element={<About></About>} ></Route> 
      <Route path='/imagesearch' element={<ImageSearchApi></ImageSearchApi>} ></Route> 
     </Routes>
     </BrowserRouter> */}
     
    </>
  )
}
export default App;
