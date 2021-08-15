import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import StarRateIcon from "@material-ui/icons/StarRate";
import PersonIcon from '@material-ui/icons/Person';
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
import { CastContext } from "../../contexts/castContext";

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
});

export default function CastCard({ cast, action }) {
    const classes = useStyles();
    /*const { castFavorites } = useContext(CastContext);
    if (castFavorites.find((id) => id === cast.id)) {
        cast.favorite = true;
    } else {
        cast.favorite = false;
    }*/

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}

                avatar={
                    cast.favorite ? (
                        <Avatar className={classes.avatar}>
                            <FavoriteIcon />
                        </Avatar>
                    ) : null
                }

                title={
                    <Typography variant="h5" component="p">
                        <PersonIcon fontSize="medium" />
                        {cast.name}{" "}
                    </Typography>
                }
            />

            <CardMedia
                className={classes.media}
                image={
                    cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : img
                }
            />

            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {cast.birthday}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {cast.popularity}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>

            {<CardActions >
                {action(cast)}
                <Link to={`/cast/${cast.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info
                    </Button>
                </Link>

            </CardActions>}
        </Card>
    );
}