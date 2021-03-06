import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MovieReviewPage from "./pages/movieReviewPage";
import MovieCastPage from "./pages/movieCastPage";
import HomePage from "./pages/homePage";
import CastPage from "./pages/movieCastPage";
import CastDetailsPage from "./pages/castDetailsPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import AuthHeader from "./components/authHeader";
import AuthContextProvider from "./contexts/authContext";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./components/privateRoute";

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
                <AuthContextProvider>
                    <SiteHeader />
                    <MoviesContextProvider>
                        {" "}
                        <Switch>
                            <Route exact path="/cast" component={CastPage} />
                            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                            <Route path="/reviews/:id" component={MovieReviewPage} />
                            {/*<Route exact path="/movies/favorites" component={FavoriteMoviesPage} />*/}
                            <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                            <Route exact path="/movies/trending" component={TrendingMoviesPage} />
                            <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
                            <Route path="/movies/:id" component={MoviePage} />
                            {/*<Route exact path="/cast" component={MovieCastPage} />*/}
                            <Route exact path="/cast/:id" component={CastDetailsPage} />
                            <Route exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </MoviesContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider >
    );
};

ReactDOM.render(<App />, document.getElementById("root"));