import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import NotFound from "./components/Shared/NotFound/NotFound";
import Register from "./components/Login/Register/Register";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Shared/Footer/Footer";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/checkout/:checkoutId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        {/* <Route path="/checkout/:checkoutId" element={<Checkout></Checkout>}></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
