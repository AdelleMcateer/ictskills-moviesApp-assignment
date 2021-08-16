//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import { getMovieCredits } from "../../api/tmdb-api";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";
//import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const MovieDetails = ({ movie }) => {  // Don't miss this!
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getMovieCredits(movie.id).then((credits) => {
            setCredits(credits);
            console.log("Credits:", credits)
        })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <p>Loading info..</p>;
    }

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Genres" className={classes.chip} color="primary" />
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} className={classes.chip} />
                    </li>
                ))}
            </Paper>

            <Paper component="ul" className={classes.root}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip
                    icon={<MonetizationIcon />}
                    label={`${movie.revenue.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate />}
                    label={`${movie.vote_average} (${movie.vote_count}`}
                />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Production Countries" className={classes.chip} color="primary" />
                </li>
                {movie.production_companies.map((p) => (
                    <li key={p.origin_country}>
                        <Chip label={p.origin_country} className={classes.chip} />
                    </li>
                ))}
            </Paper>

            <Typography variant="h5" component="h3">
                Cast
            </Typography>

            {/*} <Button variant="contained" color="secondary" onClick={() => setDrawerOpen(true)}>
                Cast Details
                </Button>*/}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="credits table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Actor</TableCell>
                            <TableCell align="center">Character</TableCell>
                            <TableCell align="right">More</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {credits.map((c) => (
                            <TableRow key={c.id}>
                                <TableCell component="th" scope="row">
                                    {c.name}
                                </TableCell>
                                <TableCell >{c.character}</TableCell>
                                <TableCell >
                                    <Link
                                        to={{
                                            pathname: `/cast/${c.id}`,
                                            state: {
                                                credit: c,
                                                movie: movie,
                                            },
                                        }}
                                    >
                                        Biography
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                className={classes.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews movie={movie} />
            </Drawer>
        </>
    );
};

export default MovieDetails;