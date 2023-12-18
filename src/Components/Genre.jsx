import React, { useEffect, useContext } from 'react'
import contextPage from './ContextPage'
import {Helmet} from "react-helmet"

function Genre(){
    const {fetchGenre, activegenre,setActiveGenre, genres, setMovies, page, setPage, filteredGenre } = useContext(contextPage);

    useEffect(() =>{
        fetchGenre();
    }, [])

    return(
        <>
        <Helmet>
            <title>Genres</title>
        </Helmet>

        <div>
            {
                genres.map((genre) =>(
                    <button
                    onClick={() => setActiveGenre(genre.id)}
                    className={activegenre === genre.id } key ={genre.id}
                    {genre.name}
                    >
                    </button>
                ))
            }
        </div>
        </>
    )
}
export default Genre();