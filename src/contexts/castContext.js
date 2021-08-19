import React, { useState } from "react";

export const CastContext = React.createContext(null);

const CastContextProvider = (props) => {

    const [castFavorites, setFavorites] = useState([])


    const addToFavorites = (cast) => {
        setFavorites([...castFavorites, cast.id])
    };
    // We will use this function in a later section
    const removeFromFavorites = (cast) => {
        setFavorites(castFavorites.filter(
            (aId) => aId !== cast.id
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