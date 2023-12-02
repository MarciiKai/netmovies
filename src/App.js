// import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./Components/Screens/Home";
import Movies from "./Components/Screens/Movies";
import TvShows from "./Components/Screens/TvShows";
import About from "./Components/Screens/About";
import Animations from "./Components/Screens/Animations"


import NetMoviesNavbar from "./Components/Navbar";

function App(){

  return(
    <>
     <NetMoviesNavbar/>
    <Routes>
      <Route path ='/' element ={<Home/>} />
      <Route path ='/Movies' element = {<Movies/>} />
      <Route path ='/TvShows' element = {<TvShows/>} />
      <Route path ='/Animations' element = {<Animations/>} />
      <Route path ='/About' element = {<About/>} />

    </Routes>
    </>
   
    
    )
}


export default App;
