import React, { Component } from 'react';
import Slider from 'react-slick';
import * as APIHelper from '../APIHelper.js';

class FeaturedMoviesCarousel extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 750,
            slidesToShow: 7,
            slidesToScroll: 7,
        };

        return (
            <Slider {...settings}>
                {
                    this.props.movies.map((movie) =>
                        <img key={movie.id} className="img-responsive" src={APIHelper.posterUrl + movie.poster_path} />
                    )
                }
            </Slider>
        );
    }
}

export default FeaturedMoviesCarousel;
