//import React, { useState, useEffect } from "react";
import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
    //const [movies, setMovies] = useState([]);
    //const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)

    /*const addToFavorites = (movieId) => {
        const updatedMovies = movies.map((m) =>
            m.id === movieId ? { ...m, favorite: true } : m
        );
        setMovies(updatedMovies);
    };*/
    if (isLoading) {
        return <Spinner />
    }

    /*useEffect(() => {
        getUpcomingMovies().then(movies => {
            setMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);*/

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={movies}
            //selectFavorite={addToFavorites}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />
            }}
        />
    );
};
export default UpcomingMoviesPage;