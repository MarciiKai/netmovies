import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import ContextPage from '../Components/ContextPage';
import {HiChevronLeft} from "react-icons/hi";


export const MoviesDetails =()=>{
    const APIKEY = process.env.VITE_API_KEY;

    const {loader , setLoader} = useContext(ContextPage);
    const {id} = useParams();
    const [moviedes, setMoviesDes] = useState([]);
    const [castdet, setCastDet] = useState([]);
    const [moviesgenr, setMoviesGenr] = useState([]);
    const [video, setVideo] = useState([]);

    const fetchMovie = async() =>{
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`    
        );
        const moviedetail = await data.json();
        setMoviesDes(moviedetail);
        setMoviesGenr(moviedetail.genres);
        setLoader(false);
    };

    const fetchCast = async() =>{
        const castdet = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language`
        );
        const castDetails = await castdet.json();
        setCastDet(castDetails.cast);
        setLoader(false);
    };

    const fetchVideo = async() =>{
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US` 
        );
        const videoDetails = await data.json();
        setVideo(videoDetails.results);
    }

    useEffect(() =>{
        fetchMovie();
        fetchCast();
        fetchVideo();
    }, []);

    return (
        <>
        </>

    )




}

