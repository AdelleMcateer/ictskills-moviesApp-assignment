import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import StarRateIcon from "@material-ui/icons/StarRate";
import PersonIcon from '@material-ui/icons/Person';
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
});

export default function CastCard({ movieCast }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <Typography variant="h5" component="p">
                        <PersonIcon fontSize="medium" />
                        {movieCast.name}{" "}
                    </Typography>
                }
            />

            <CardMedia
                className={classes.media}
                image={
                    movieCast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${movieCast.profile_path}`
                        : img
                }
            />

            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <PersonIcon fontSize="medium" />
                            {movieCast.character}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {movieCast.popularity}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

            {<CardActions >
                <Link to={`/movies/${movieCast.id}/filmography`}>
                    <Button variant="outlined" size="medium" color="primary">
                        Filmography
                    </Button>
                </Link>

                {/*<Link to={`/movies/${movieCast.id}/filmography`}>
                    <Button variant="outlined" size="medium" color="primary">
                        Filmography
                    </Button>
            </Link> */}
            </CardActions>}
        </Card>
    );
}