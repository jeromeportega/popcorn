import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class ControlledCarousel extends Component {

    render() {
        return (
            <Carousel>
                {
                    this.props.movies.map((movie) =>
                        <Carousel.Item key={movie.id}>
                            <img className="img-responsive" src={movie.Poster} />
                        </Carousel.Item>
                    )
                }
            </Carousel>
        );
    }
}

export default ControlledCarousel;
