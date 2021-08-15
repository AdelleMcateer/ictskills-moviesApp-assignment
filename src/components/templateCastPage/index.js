import React from "react";
import MovieHeader from "../headerMovie";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridList: {
        width: 450,
        height: '100vh',
    },
}));

const TemplateCastPage = ({ actor, children }) => {
    const classes = useStyles();
    const { data, error, isLoading, isError } = useQuery(
        ["actorImages", { id: actor.id }],
        getActorImages
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const images = data.profiles

    return (
        <>
            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <Header title={actor.name} />
                    <div className={classes.root}>
                        <GridList cellHeight={500} className={classes.gridList} cols={1}>
                            {images.map((image) => (
                                <GridListTile key={image.file_path} className={classes.gridListTile} cols={1}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                        alt={image.poster_path}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </Grid>
                {children}
            </Grid>
        </>
    );
};

export default TemplateCastPage;
