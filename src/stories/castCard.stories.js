import React from "react";
//import CastCardList from "../components/castCardList";
import CastCard from "../components/castCard";
import SampleMovieCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Cast Details Page/CastCard",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastCard
      movie={SampleMovieCast}
      //action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movieCast) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovieCast, profile_path: undefined };
  return (
    <CastCard
      movieCast={sampleNoPoster}
      //action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
