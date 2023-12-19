import React, { useEffect, useContext } from 'react';
import ContextPage from './ContextPage';
import Header from '../Screens/Header';
import Header from '../Screens/Header';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MovieCard from './MovieCard';


function Search(){
    const {searchedMovies, loader, fetchSearch } = useContext(ContextPage);
    const {query}  = useParams();

    useEffect(() =>{
        fetchSearch(query);
    },
    [query]);

    return(
        <section>
            <Link to ="/"><HiChevronLeft/>
            </Link>
            <div>
                <Header/>
                <motion.div>
                    <AnimatePresence>
                        {
                            loader ? <span className='loader m-10'></span>:
                            <>
                            {searchedMovies.map((movie) =>(
                                <MovieCard key={movie.id} movie ={movie}/>
                            ))}
                            </>

                        }
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    )
}

export default Search;