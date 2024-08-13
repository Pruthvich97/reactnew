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
import EmployeeManager from "./ContactManager/EmployeeManager.js";



function App() {
  return (
    <>
      {/*WithOut Higher Order functions */}
      {/* <FilterClothingProducts data={clothing}></FilterClothingProducts> */}


      {/*With Higher Order functions */}
      {/* <ClothingCategory data={clothing}></ClothingCategory> */}
      {/* <ElectronicCategory data={electronics}></ElectronicCategory> */}
      <EmployeeManager></EmployeeManager>
     
    </>
  )
}
export default App;
