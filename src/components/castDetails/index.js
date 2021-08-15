import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import CakeIcon from "@material-ui/icons/Cake";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import PlaceIcon from "@material-ui/icons/Place";
import MovieReviews from "../movieReviews";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

    return (
        <>
            <Typography variant="h5" component="h3">
                Cast Bio
            </Typography>

            <Typography variant="h8" component="p">
                {cast.biography}
            </Typography>

            <Paper component="ul" className={classes.root}>
                <Chip
                    icon={<StarRate />}
                    label={`Popularity: ${cast.popularity}`}
                />
            </Paper>

            <Paper component="ul" className={classes.root}>
                <Chip icon={<CakeIcon />} label={`Birthday: ${cast.birthday}`} />
                <Chip icon={<PlaceIcon />} label={`Place of Birth: ${cast.place_of_birth}`} />
            </Paper>
        </>
    );
};
export default CastDetails;