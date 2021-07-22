import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
//import MovieDetails from "../components/movieDetails";
//import PageTemplate from "../components/templateMoviePage";
//import { getMovie } from '../api/tmdb-api'
//import { useQuery } from "react-query";
//import Spinner from '../components/spinner'

import CastDetails from "../components/castDetails";
import CastMovies from "../components/castMovies";
import PageCastTemplate from "../components/templateCastPage";
import usePerson from "../hooks/usePerson";


const CastDetailsPage = (props) => {
    const { id } = props.match.params;
    const [person] = usePerson(id);
    /*const { data: movie, error, isLoading, isError } = useQuery(
        ["movie", { id: id }],
        getMovie
    )

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }*/

    return (
        <>
            {person ? (
                <>
                    <PageCastTemplate person={person}>
                        <CastDetails person={person} />
                    </PageCastTemplate>

                    {!props.history.location.pathname.endsWith(
                        "/movies-appeared-in"
                    ) ? (
                        <Link
                            className="btn btn-warning btn-block active"
                            to={`/person/${id}/movies-appeared-in`}
                        >
                            Show Movies {person.name} Has Appeared In
                        </Link>
                    ) : (
                        <Link
                            className="btn btn-warning btn-block active"
                            to={`/person/${id}`}
                        >
                            Hide Movies
                        </Link>)}


                    <Route
                        path={`/person/:id/movies-appeared-in`}
                        render={(props) => <CastMovies person={person} {...props} />}
                    />
                </>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );
};

export default withRouter(CastDetailsPage);
