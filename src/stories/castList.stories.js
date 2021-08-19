import React from "react";
import CastList from "../components/castList";
import SampleMovieCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import CastContextProvider from "../contexts/castContext";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actors/Cast List",
  component: CastList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CastContextProvider>{Story()}</CastContextProvider>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const actors = [
    { ...SampleMovieCast, id: 1 },
    { ...SampleMovieCast, id: 2 },
    { ...SampleMovieCast, id: 3 },
    { ...SampleMovieCast, id: 4 },
    { ...SampleMovieCast, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <CastList
        actors={actors}
        action={(actor) => <AddToFavoritesIcon actor={actor} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";