import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContextPage from '../Components/ContextPage';
import {getSmashystreamUrl} from '../movie';
import {HiChevronLeft} from "react-icons/hi";

const Play = () =>{
    const {setHeader} = useContext(ContextPage);
    const [moviedes, setMoviesDes] = useState([]);
    const { id } = useParams()

    const APIKEY = import.meta.env.VITE_API_KEY;
    const fetchMovie = async () =>{
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
        );
        const moviedescr = await data.json();
        setMoviesDes(moviedescr);
    };

    useEffect(() =>{
        fetchMovie()
        setHeader("Player")
    }, []);

    document.title = `NetMovies  | ${moviedes.title}`

    return(
        <>
        <button onClick={()=>unstable_HistoryRouter.back()}><HiChevronLeft/></button>
        <iframe allowFullScreen style={{ display: 'flex', alignItems:"center", justifyContent:"center", width:"100%", height:"100vh"}} src={getSmashystreamUrl(id)}></iframe>
        </>
    )
} 
export default Play;
