import "./App.css";
import React from "react";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { MovieProvider } from "./contexts/MovieContext";
import Navbar from "./components/NavBar";
import "./App.css";
function App() {


  return (

   <MovieProvider>
   <Navbar/>
  
    <main className="main-content">
      <Routes>

     <Route path="/" element={<Home />} />
     <Route path="favorites" element={<Favorites/>} />
     <Route path ="*" element={<NotFound/>} />

      </Routes>
    </main>
    </MovieProvider>
  )
}


export default App;
