import React from "react";
import CastCard from "../components/castCard";
import SampleMovieCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import CastContextProvider from "../contexts/castContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Cast/CastCard",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <CastContextProvider>{Story()}</CastContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastCard
      actor={SampleMovieCast}
      action={(actor) => <AddToFavoritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovieCast, poster_path: undefined };
  return (
    <CastCard
      actor={sampleNoPoster}
      action={(actor) => <AddToFavoritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Exceptional.storyName = "Exception";