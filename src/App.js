import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.js";
import Restaurent from "./components/Restaurant.js";
import {BrowserRouter,Routes, Route} from "react-router-dom";




function App(){
 return (
<>
<BrowserRouter>
 <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/restaurent" element={<Restaurent></Restaurent>}></Route>


 </Routes>

</BrowserRouter>
</>
 )
}


























const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)