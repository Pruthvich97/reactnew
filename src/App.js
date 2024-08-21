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
// import FormElements from "./FormComponents/FormElements.js";
// import EmployeeManager from "./ContactManager/EmployeeManager.js";
// import Home from "./Routes/Home.js"
// import About from "./Routes/About.js"
// import LeaderBoard from "./ScoreBoard/LeaderBoard.js"
// import Rank from "./ScoreBoard/rank.js"
// import Age from "./ScoreBoard/AgeOrder.js"
// import Name from "./ScoreBoard/name.js"
// import Score from "./ScoreBoard/Score.js"
// import User from "./NestedRoutes/User.js"
// import Login from "./NestedRoutes/Login.js"
// import About from "./NestedRoutes/About.js"
import LoginPageFunctional from "./RouterComponents/LoginPageFunctional.js"
import DashBoardHooks from "./RouterComponents/DashBoardHooks.js"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import LoginPageComponent from "./RouterHooks/LoginPageComponent.js"
import PageNotFound from "./RouterComponents/PageNotFound.js"


function App() {
  return (
    <>
      {/*WithOut Higher Order functions */}
      {/* <FilterClothingProducts data={clothing}></FilterClothingProducts> */}
      {/*With Higher Order functions */}
      {/* <ClothingCategory data={clothing}></ClothingCategory> */}
      {/* <ElectronicCategory data={electronics}></ElectronicCategory> */}
     {/* <ImageSearchApi></ImageSearchApi> */}
     {/* <FormElements></FormElements> */}
    {/* <Link to="/home">Home App</Link>
     <Link to="/About">About Page</Link>
     <Link to="/imagesearch">Imagesearch</Link> */}
       {/* <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
      <Route path='/rank' element={<Rank></Rank>}></Route>
      <Route path='/name' element={<Name></Name>}></Route>
      <Route path='/age' element={<Age></Age>}></Route>
      <Route path='/score' element={<Score></Score>}></Route> */}
    
      {/* <Route path='/home' element={<Home></Home>} ></Route>
      <Route path='/About' element={<About></About>} ></Route>  */}
      {/* <Route path='/imagesearch' element={<ImageSearchApi></ImageSearchApi>} ></Route>  */} 
     <BrowserRouter>
      <Routes>
      {/* <Route path='/user'element={<User></User>}>
      <Route path='login' element={<Login></Login>}>
      <Route path='about' element={<About></About>}></Route>
      </Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Route> */} 

      <Route path='/' element={<LoginPageFunctional></LoginPageFunctional>}></Route>
      <Route path='/dashboard/:username' element={<DashBoardHooks></DashBoardHooks>}></Route>
      <Route path='/error' element={<PageNotFound></PageNotFound>}></Route> 
     </Routes>
     </BrowserRouter> 
     
    </>
  )   
}
export default App;
