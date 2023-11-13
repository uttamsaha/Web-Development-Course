import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect} from 'react';
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Home/Footer/Footer";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AddInventoryItem from "./Pages/ManageInventory/AddInventoryItem/AddInventoryItem";
import ManageInventories from "./Pages/ManageInventory/ManageInventories/ManageInventories";
import MyItems from "./Pages/ManageInventory/MyItems/MyItems";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import HashLoader from "react-spinners/HashLoader";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },4500)
  },[])
  return (
    <div>
      {
        loading ?
        <div className="loading">
          <HashLoader
          size={130}
          color={"#FF5F15"}
          loading={loading}
          />
        </div>
        :
        <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/inventory/:id" element={<RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}></Route>
          <Route path="/addnewitem" element={<RequireAuth>
            <AddInventoryItem></AddInventoryItem>
          </RequireAuth>}></Route>
          <Route path="/myitems" element={<RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}></Route>
          <Route path="/manageInventories" element={<RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
      }
    </div>  
  );
}

export default App;
