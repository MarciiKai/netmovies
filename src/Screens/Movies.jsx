import React, {useEffect, useContext} from 'react';
import contextPage from '../Components/ContextPage';
import movieCard from '../Components/MovieCard';
import {motion, AnimatePresence } from 'framer-motion';
import Genre from '../Components/Genre';
import Header from './Header';
import InfiniteScroll from 'react-infinite-scroll-component';


function Movies(){
    const { movies, filterGenre,loader,activegenre, page, totalPage, setPage, setMovies } = useContext(contextPage);

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
    }, [page])

    return (
        <div className='w-full'>
        <Genre/>
        <Header/>
          <motion.div
          layout className ="flex">
        <AnimatePresence>
            {
              loader ? <span className='loader'></span> :
              <>
              <InfiniteScroll
               className = "w-full"
               dataLength ={movies.length}
               next ={() => setPage(page + 1)}
               hasMore = {page < totalPage}
               loader = {<span className='loader'></span>}
               scrollThershol ={0.9}
               style = {{overflow: 'hidden'}}
               >

                {movies.map((movie) => (
                  <movieCard key ={movie.id} movie={movie}/>
                ) )}
              </InfiniteScroll>
              </>
            }
           
        </AnimatePresence>
          </motion.div>
       </div>
    );
}
export default Movies;