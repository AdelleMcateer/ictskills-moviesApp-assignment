import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToMustWatchIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToMustWatch = (e) => {
        e.preventDefault();
        context.addToMustWatch(movie);
        console.log(context.mustWatch);
        //.context.addToFavorites(movie);
    };
    return (
        <IconButton aria-label="add to must watch list" onClick={handleAddToMustWatch}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToMustWatchIcon;