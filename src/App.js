import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./Components/Screens/Home";
import Movies from "./Components/Screens/Movies";
import TvShows from "./Components/Screens/TvShows";
import About from "./Components/Screens/About";
import Animations from "./Components/Screens/Animations";
import Header from "./Components/Screens/Header";


import NetMoviesNavbar from "./Components/Navbar";

function App(){

  return(
    <>
     <NetMoviesNavbar/>
     <Header/>

    <Routes>
      <Route path ='/'  />
      <Route path ='/Movies' />
      <Route path ='/TvShows' />
      <Route path ='/Animations' />
      <Route path ='/About' />

    </Routes>
    </>
   
    
    )
}


export default App;
