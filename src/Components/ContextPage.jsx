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

}