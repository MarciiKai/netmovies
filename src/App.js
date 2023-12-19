import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./Screens/About";
import Movies from "./Screens/Movies";
import TvShows from "./Screens/TvShows";
import About from "./Screens/About";
import Animations from "./Screens/Animations";
import Header from "./Screens/Header";
import NetMoviesNavbar from "./Components/Navbar";
import { MovieProvider } from './Components/ContextPage';


function App(){

  return(
    <>
     <NetMoviesNavbar/>
     <Header/>

     <MovieProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/Animations" element={<Animations />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </MovieProvider>
    </>
   
    
    )
}


export default App;
