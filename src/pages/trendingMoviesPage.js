import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTrendingMovies } from "../api/tmdb-api";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'

const TrendingPage = (props) => {

    const { data, error, isLoading, isError } = useQuery('popular', getTrendingMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    return (
        <PageTemplate
            title='Trending Movies'
            movies={movies}
            action={(movie) => {
                return <AddToMustWatchIcon movie={movie} />
            }}
        />
    );
};
export default TrendingPage;
