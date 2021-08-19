import React from "react";
import CastDetails from "../components/castDetails";
import Cast from "../components/castCard";
import SampleMovieCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
import CastContextProvider from "../contexts/castContext";

export default {
    title: "Actors/CastDetails",
    component: CastDetails,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <CastContextProvider>{Story()}</CastContextProvider>,
    ],
};

export const Basic = () => <CastDetails cast={SampleMovieCast} />;

Basic.storyName = "Default";