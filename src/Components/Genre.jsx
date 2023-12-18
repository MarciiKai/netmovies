import React, { useEffect, useContext } from 'react';
import ContextPage from './ContextPage';
import { Helmet } from 'react-helmet-async';

function Genre() {
  const {
    fetchGenre,
    activegenre,
    setActiveGenre,
    genres,
    setMovies,
    page,
    setPage,
    filteredGenre,
  } = useContext(ContextPage);

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <>
      <Helmet>
        <title>Genres</title>
      </Helmet>

      <div>
        {genres.map((genre) => (
          <button
            onClick={() => setActiveGenre(genre.id)}
            className={activegenre === genre.id ? 'active' : ''}
            key={genre.id}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default Genre;
