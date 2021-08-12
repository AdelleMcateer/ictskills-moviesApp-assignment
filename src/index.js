import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import MovieReviewPage from "./pages/movieReviewPage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import CastDetailsPage from "./pages/profilePage";
import CastContextProvider from "./contexts/castContext";
import FilmographyPage from "./pages/filmographyPage";
import CastPage from "./pages/movieCastPage";
import movieCastPage from "./pages/movieCastPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader />
                <MoviesContextProvider>
                    <CastContextProvider>
                        {" "}
                        <Switch>
                            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                            <Route path="/reviews/:id" component={MovieReviewPage} />
                            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                            <Route exact path="/movies/trending" component={TrendingMoviesPage} />
                            <Route path="/movies/:id" component={MoviePage} />
                            <Route path="/movies/:id/cast" component={CastPage} />
                            <Route exact path="/movies/:id/filmography" component={FilmographyPage} />
                            <Route exact path="/" component={HomePage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </CastContextProvider>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider >
    );
};

ReactDOM.render(<App />, document.getElementById("root"));