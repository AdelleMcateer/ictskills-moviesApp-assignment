//import React, { useState, useEffect } from "react";
//import { withRouter } from "react-router-dom";
import React from "react";
//import PageTemplate from "../components/templateMovieListPage";
import PageTemplate from "../components/templateCastListPage";
//import CastList from "../components/castList";
//import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Spinner from '../components/spinner'
import { getActors } from '../api/tmdb-api'

const MovieCastPage = (props) => {
    const { data, error, isLoading, isError } = useQuery
        ("discover", getActors)

    if (isLoading) {
        return <Spinner />;
    };

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const cast = data.results;

    // Redundant, but necessary to avoid app crashing.
    const castFavorites = cast.filter(c => c.favorite)
    localStorage.setItem('favorites', JSON.stringify(castFavorites))


    return (
        <PageTemplate
            title="Discover the Cast"
            cast={cast}
            action={(cast) => {
                return <AddToFavoritesIcon cast={cast} />
            }}
        />
    );
};

export default MovieCastPage

