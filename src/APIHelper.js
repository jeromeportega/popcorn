import * as $ from 'jquery';

// Set API Key
const apiKey = '02a93a4b0b9c93f04f65e7f1dfa82faa';
const apiKeyEncoded = '?api_key=' + apiKey;

// Set Url's For API Calls
const moviesUrl = 'https://api.themoviedb.org/3/movie/now_playing';
const movieDetailsUrl = 'https://api.themoviedb.org/3/movie/';
export const posterSmall = "https://image.tmdb.org/t/p/w150";
export const posterLarge = "https://image.tmdb.org/t/p/w500";
export const backdropUrl = "https://image.tmdb.org/t/p/original";

// Get Current Movies For Front-Page Carousel
export const getCarouselMovies = () => (
    $.ajax({
        url: moviesUrl + apiKeyEncoded,
        crossDomain: true,
        method: 'GET',
    })
);

// Get Individual Movie Details Using the ID Of The Movie
export const getListMovieDetails = (id) => (
    $.ajax({
        url: movieDetailsUrl + id + apiKeyEncoded + '&append_to_response=credits',
        crossDomain: true,
        method: 'GET',
    })
);
