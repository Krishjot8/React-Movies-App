import "./App.css";
import React from "react";
import MovieCard from "./components/MovieCard";


function App() {
  return (
<MovieCard movie={{title: "Krishjot's Film", release_date: "2024-01-01"}}/>
  );
}


export default App;
