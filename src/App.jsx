import "./App.css";
import React from "react";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/NavBar";
import "./App.css";
function App() {


  return (

   <div>
   <Navbar/>
  
    <main className="main-content">
      <Routes>

     <Route path="/" element={<Home />} />
     <Route path="favorites" element={<Favorites/>} />
     <Route path ="*" element={<NotFound/>} />

      </Routes>
    </main>
   </div>
  )
}


export default App;
