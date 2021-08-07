//import React from "react";
import React, { useState, useEffect } from "react";
import { Route, Link, withRouter } from "react-router-dom";
//import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getCastMovies } from '../api/tmdb-api'
import CastList from "../components/castList";
import PageCastTemplate from "../components/templateCastPage";


const CastDetailsPage = (props) => {
    const { id } = props.match.params;

    const [cast, setCast] = useState([]);
    useEffect(() => {
        getCastMovies(id).then((cast) => {
            setCast(cast);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(cast);

    const { data: movie, error, isLoading, isError } = useQuery(
        ["discover", { id: id }],
        getMovie
    );

    if (isLoading) {
        return <Spinner />;
    };

    if (isError) {
        return <h1>{error.message}</h1>;
    };

    return (
        <>
            {movie ? (
                <>
                    <PageTemplate movie={movie}>
                        <CastList cast={cast} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting fo details</p>
            )}
        </>
    );
};

export default withRouter(CastDetailsPage);
