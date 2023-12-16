import React, {useEffect, useContexy} from 'react';
import contextPage from '../ContextPage';
import movieCard from './MovieCard';
import {motion, AnimatePresence } from 'framer-motion';
import Genre from './Genre';
import Header from './Header'


function Movies(){
    const { movies, filterGenre,loader,activegenre, page, setPage, setMovies } = useContext(contextPage);

    useEffect(() =>{
        setPage(1)
    },
    []);

    useEffect(() => {
      setMovies([])
      setPage(0)
    }, [activegenre]);

    useEffect(() =>{
      if(page > 0){
        filterGenre();
      }
    })
}
export default Movies;