import React, { useState } from "react";

export const CastContext = React.createContext(null);

const CastContextProvider = (props) => {

    const [castFavorites, setFavorites] = useState([])


    const addToFavorites = (movieCast) => {
        setFavorites([...castFavorites, movieCast.id])
    };
    // We will use this function in a later section
    const removeFromFavorites = (movieCast) => {
        setFavorites(castFavorites.filter(
            (aId) => aId !== movieCast.id
        ))
    };

    return (
        <CastContext.Provider
            value={{
                castFavorites,
                addToFavorites,
                removeFromFavorites,
            }}
        >
            {props.children}
        </CastContext.Provider>
    );
};

export default CastContextProvider;