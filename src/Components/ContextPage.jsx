import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContextPage = createContext();
export function MovieProvider({children}){

  const [header, setHeader] = useState("Trending");
  const [totalPage, setTotalPage] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [page, setPage] = useState(1);
  const [activegenre, setActiveGenre] = useState(28);
  const [genres, setGenres] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const APIKEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (page < 1){
      setPage(1)
    }
  }, [page]);

  const filteredGenre = async () =>{
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${activegenre}&api_key=${APIKEY}&with_origin_country=IN&page=${page}`
    );
    const filteredGenre = await data.json();
    setMovies(movies.concat(filteredGenre.results));
    setTotalPage(filteredGenre.total_pages);
    setLoader(false);
    setHeader("Genres");
  };

  const fetchSearch = async (query) =>{
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&with_origin_country=IN&language=en-US&query=${query}&page=1&include_adult=false`

    );
    const searchMovies = await data.json();
    setSearchedMovies(searchMovies.results);
    setLoader(false);
    setHeader(`Results for "${query}"`)
  };

  const fetchGenre = async () =>{
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&with_origin_country=IN&language=en-US`
    );
    const gen = await data.json();
    setGenres(gen.genres)
  };

  const fetchTrending = async () =>{
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}&with_origin_country=IN&page=${page}`
    );
    const trend = await data.json();
    setTrending(trending.concat(trend.results));
    setTotalPage(trend.total_pages);
    setLoader(false);
    setHeader("Trending Movies");
     };

     const fetchUpcoming = async() =>{
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&with_origin_country=IN&language=en-US&page=${page}`
      );
      const upcome = await data.json();
      setUpcoming(upcoming.concat(upcome.results));
      setTotalPage(upcome.total_pages);
      setLoader(false);
      setHeader("Upcoming Movies");
      };

      return(
        <ContextPage.Provider
        value ={{
          setGenres,
          fetchGenre,
          filteredGenre,
          genres,
          setActiveGenre,
          activegenre,
          setLoader,
          loader,
          fetchUpcoming,
          upcoming,
          setTotalPage,
          totalPage,
          fetchTrending,
          trending,
          fetchSearch,
          setSearchedMovies,
          searchedMovies,
          setMovies,
          movies,
          setHeader,
          header,
          setPage,
          page,
        }}
        >
            {children}
        </ContextPage.Provider>
      );

}

export default ContextPage;