import React, { useState } from "react";
//import React from "react";
import Header from "../headerCastList";
import FilterCard from "../filterCastCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CastList from "../castList";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
});

function TemplateCastListPage({ cast, name, action }) {
    const classes = useStyles();
    const [nameFilter, setNameFilter] = useState("");

    let displayedCast = cast
        .filter((c) => {
            if (typeof (c.name) != "undefined")
                return c.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
            //return c.name.search() !== -1;
            else
                return false;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);

    };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Header title={name} />
            </Grid>
            <Grid item container spacing={5}>
                <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FilterCard
                        onUserInput={handleChange}
                        titleFilter={nameFilter}

                    />
                </Grid>
                <CastList action={action} cast={displayedCast}></CastList>
            </Grid>
        </Grid>
    );
}
export default TemplateCastListPage;