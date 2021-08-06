import React, { useState } from "react";

export const CastContext = React.createContext(null);

const CastContextProvider = (props) => {
    const [cast] = useState([])



    return (
        <CastContext.Provider
            value={{
                cast
            }}
        >
            {props.children}
        </CastContext.Provider>
    );
};

export default CastContextProvider;