import React from "react";
//import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
//import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getCastMovies } from '../api/tmdb-api'
import { getPerson } from '../api/tmdb-api'
import ProfileDetails from "../components/profileDetails";

import CastList from "../components/castList";
import PageCastTemplate from "../components/templateCastPage";


const ProfilePage = (props) => {
    const { id } = props.match.params;

    const { data: actor, error, isLoading, isError } = useQuery(
        ["profile", { id: id }],
        getPerson
    );

    if (isLoading) {
        return <Spinner />;
    };

    if (isError) {
        return <h1>{error.message}</h1>;
    };

    return (
        <>
            {actor ? (
                <>
                    <PageTemplate actor={actor}>
                        <ProfileDetails actor={actor} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for details</p>
            )}
        </>
    );
};

export default withRouter(ProfilePage);
