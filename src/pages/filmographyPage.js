import React from "react";
//import PageTemplate from "../components/templateMovieListPage";
import PageTemplate from "../components/templateMovieCastPage";
import { withRouter } from "react-router-dom";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getFilmography } from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const FilmographyPage = (props) => {
    const { id } = props.match.params;

    const { data, error, isLoading, isError } = useQuery(
        ["filmography", { id: id }], getFilmography
    );

    const movies = data;
    console.log("Filmography : " + movies);

    if (isLoading) {
        return <Spinner />;
    };

    if (isError) {
        return <h1>{error.message}</h1>;
    };

    return (
        <PageTemplate
            title="Filmography"
            movies={movies}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />
            }}
        />
    );
};

export default withRouter(FilmographyPage);