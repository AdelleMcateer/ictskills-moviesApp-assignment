# Assignment - ReactJS app.

Name: Adelle McAteer

## Overview.

This an extension of the Movies fan app from the previous lab work.

### New/modified features:

 + Trending Movies Page
 + Top Rated Movies
 + Cast List visible on the movie details page
 + Seperate Cast page displaying popluar stars and images
 + Cast Biography hypelink on movie details page and cast page
 + Login View and basic login functionality
 + User must log in to view movies added to favorites

## Setup requirements.

Clone and unzip the epository to your local machine.

To install the required modules run the below from the terminal:

```
$ npm install
```
To start the app run the below from the terminal:

```
$ npm start
```

To run storybook:

```
$ npm run storybook
```

## API Data Model.

![][model]

The following additional TMDB endpoints have been used

### Trending Movies
```
$ https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=2
```
 ![Trending movies sample output](./src/images/trendingMovies.JPG?raw=true)

### Top Rated Movies
 ```
 $ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```
 ![Top Rated movies sample output](./src/images/topratedMovies.JPG?raw=true)

### Movie credits 
```
$ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}
```
 ![Movie Credits sample output](./src/images/movieCredits.JPG?raw=true)

### Cast/actors
```
$https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
```
 ![Movie Cast sample output](./src/images/castDetails.jpg?raw=true)

### Popular Cast/actors
```
$ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_video=false&page=1
 ```
  ![Popular Cast sample output](./src/images/actorDetails.png?raw=true)

### Cast Images
```
$ https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}
```
  ![Cast Images sample output](./src/images/castImages.JPG?raw=true)
  
### Combined Credits
```     
$ https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```
  ![Combined Credits sample output](./src/images/combinedCredits.jpg?raw=true)

## App Design.

### Component catalogue.

Storybook UI screenshots showing new/modified components:

#### Cast Card

![Cast Card component](./src/images/CastCardDefault.JPG?raw=true)

#### Cast List

![Cast List component](./src/images/CastListDefault.JPG?raw=true)

#### Filter Cast

![Filter Cast Card component](./src/images/FilterCastCard.JPG?raw=true)


### UI Design.

Screenshots of the app's new/modified views views:

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

#### LoginPage

![Login Page](./src/images/LoginPage.JPG?raw=true)
>Shows the login Page. Clicking the 'Login' option as well as the 'Favorites' options will display this page.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /cast - displays movie cast
+ GET /movies/trending - displays currently trending movies - this updates regularly
+ GET /movies/toprated - displays top rated movies 
+ GET //movies/favorites (protected) - view of logged in user's movies tagged as favorites
+ POST /blogs (protected) - add a new blog
+ GET /cast/:id - displays a particular cast member


## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png