import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import CakeIcon from "@material-ui/icons/Cake";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import PlaceIcon from "@material-ui/icons/Place";
import MovieReviews from "../movieReviews";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import StarRate from "@material-ui/icons/StarRate";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { getFilmography } from "../../api/tmdb-api";

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

const CastDetails = ({ cast }) => {  // Don't miss this!
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [actor, setCredits] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getFilmography(actor.id).then((actor) => {
            setCredits(actor);
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
        return <p>Loading Details...</p>;
    }

    return (
        <>
            <Typography variant="h5" component="h3">
                Cast Biography
            </Typography>
            <br></br>
            <Typography variant="h8" component="p">
                {actor.biography}
            </Typography>

            <Paper component="ul" className={classes.root}>
                <Chip
                    icon={<StarRate />}
                    label={`Popularity: ${actor.popularity}`}
                />
            </Paper>

            <Paper component="ul" className={classes.root}>
                <Chip icon={<CakeIcon />} label={`Birthday: ${actor.birthday}`} />
                <Chip icon={<PlaceIcon />} label={`Place of Birth: ${actor.place_of_birth}`} />
            </Paper>

            <Typography variant="h8" component="p">
                <br></br>
                <Chip label="Known For" className={classes.chip} color="primary" />
                <b>{actor.known_for_department}</b>
            </Typography>
            <br></br>

            <Typography variant="h5" component="h3">
                Filmography
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="credits table">
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell className={classes.tableCell}>Movie</TableCell>
                            <TableCell className={classes.tableCell}>Character</TableCell>
                            <TableCell className={classes.tableCell}>More Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {actor.map((a) => (
                            <TableRow key={a.id} className={classes.tableCell}>
                                <TableCell component="th" scope="row">
                                    {a.title}
                                </TableCell>
                                <TableCell className={classes.tableCell}>{a.character}</TableCell>
                                <TableCell className={classes.tableCell}>
                                    <Link
                                        to={{
                                            pathname: `/movies/${a.id}`,
                                            state: {
                                                movie: a
                                            },
                                        }}
                                    >
                                        Movie Link
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
export default CastDetails;