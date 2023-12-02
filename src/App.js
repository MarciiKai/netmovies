import React from "react";
import {Route, Routes} from 'react-router-dom'
import NetMoviesNavbar from "./Components/Navbar";
import './App.css';


function App(){

  return(
    <>
     <NetMoviesNavbar/>
    <Routes>
      <Route path ='/'  />
      <Route path ='/Movies'  />
      <Route path ='/TvShows' />
      <Route path ='/Animations'  />
      <Route path ='/About'  />

    </Routes>
    </>
   
    
    )
}


export default App;
