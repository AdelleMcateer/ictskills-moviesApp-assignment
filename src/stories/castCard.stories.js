import React from "react";
import CastCard from "../components/castCard";
import SampleMovieCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
//import MoviesContextProvider from "../contexts/moviesContext";
import CastContextProvider from "../contexts/castContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Home Page/CastCard",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CastContextProvider>{Story()}</CastContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastCard
      cast={SampleMovieCast}
      action={(cast) => <AddToFavoritesIcon cast={cast} />}
      taging={(cast) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovieCast, profile_path: undefined };
  return (
    <CastCard
      movieCast={sampleNoPoster}
      action={(cast) => <AddToFavoritesIcon cast={cast} />}
      taging={(cast) => null}
    />
  );
};

Exceptional.storyName = "exception";