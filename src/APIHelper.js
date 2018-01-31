import * as $ from 'jquery';

const apiKey = '02a93a4b0b9c93f04f65e7f1dfa82faa';
const moviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const posterSmall = "https://image.tmdb.org/t/p/w150";
export const posterLarge = "https://image.tmdb.org/t/p/w500";
export const backdropUrl = "https://image.tmdb.org/t/p/original";

export const getCarouselMovies = () => (
    $.ajax({
        url: moviesUrl + '&callback=test',
        dataType: 'jsonp',
        jsonpCallback: 'test',
    })
);
