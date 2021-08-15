import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/templateMovieCastPage";
import CastList from "../components/castList";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getMovieCredits } from '../api/tmdb-api'

const MovieCastPage = (props) => {
    const { id } = props.match.params;

    const [cast, setCast] = useState([]);
    useEffect(() => {
        getMovieCredits(id).then((cast) => {
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
                <p>Loading cast details..'</p>
            )}
        </>
    );
};

export default withRouter(MovieCastPage);