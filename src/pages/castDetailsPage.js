import React from "react";
import { withRouter } from "react-router-dom";
import CastDetails from "../components/castDetails";
import PageTemplate from "../components/templateCastPage";
//import useMovie from "../hooks/useMovie";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const CastDetailsPage = (props) => {
    const { id } = props.match.params

    const { data: cast, error, isLoading, isError } = useQuery(
        ["cast", { id: id }],
        getActor
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {cast ? (
                <>
                    <PageTemplate cast={cast}>
                        <CastDetails cast={cast} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for details</p>
            )}
        </>
    );
};

export default withRouter(CastDetailsPage);