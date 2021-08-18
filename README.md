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

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

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