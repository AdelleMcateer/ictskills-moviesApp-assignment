export const getMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getMovie = async (args) => {
    // console.log(args)
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getGenres = async () => {
    const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
    const [prefix, { id }] = queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getMovieReviews = (id) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => {
            // console.log(json.results);
            return json.results;
        });
};

export const getUpcomingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getTrendingMovies = async () => {
    const response = await fetch(
        //`https://api.themoviedb.org/3/discover/movie?sort_by=popularity&api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=2`
    )
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getTopRatedMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getMovieCredits = (id) => {
    console.log("Retrieving movie credits");
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
        .then((res) => res.json())
        .then((json) => {
            return json.cast;
        });
};

/*export const getProfile = async (args) => {
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};*/

export const getActor = async (args) => {
    const [prefix, { id }] = args.queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getActors = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_video=false&page=1`
    );
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getActorImages = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
        throw new Error(response.json().message);
    }
    return response.json();
};

export const getFilmography = async ({ queryKey }) => {
    const [prefix, { id }] = queryKey;
    console.log("Retrieving filmography");
    return fetch(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
        .then((res) => res.json())
        .then((json) => {
            console.log("JSON : " + id + " " + json.cast);
            return json.cast;
        });
};


