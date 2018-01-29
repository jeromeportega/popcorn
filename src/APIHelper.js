import * as $ from 'jquery';

const apiKey = '02a93a4b0b9c93f04f65e7f1dfa82faa';
const moviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

export const getCarouselMovies = () => (
    $.ajax({
        url: moviesUrl + '&callback=test',
        dataType: 'jsonp',
        jsonpCallback: 'test',
    })
);
