// import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./Components/Screens/Home";
import Movies from "./Components/Screens/Movies";
import TvShows from "./Components/Screens/TvShows";
function App(){

  return(
    <Routes>
      <Route path ='/' element ={<Home/>} />
      <Route path ='/Movies' element = {<Movies/>} />
      <Route path ='/TvShows' element = {<TvShows/>} />


    </Routes>
    
    )
}


export default App;
