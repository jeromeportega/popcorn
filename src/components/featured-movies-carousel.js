// Libraries
import React, { Component } from 'react';
import Slider from 'react-slick';
import * as APIHelper from '../APIHelper.js';
import { Modal } from 'react-bootstrap';

class FeaturedMoviesCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMovieDetailsModal: false,
            selectedMovie: {},
        }
    }

    _closeModal() {
        this.setState({
            showMovieDetailsModal: false,
        });
    }

    render() {
        const { selectedMovie } = this.state;

        var settings = {
            dots: true,
            infinite: true,
            speed: 750,
            slidesToShow: 6,
            slidesToScroll: 6,
        };

        return (
            <div>
                <Slider {...settings}>
                    {
                        this.props.movies.map((movie, index) =>
                            <img key={index}
                                 alt=""
                                 className="img-responsive cursor carousel-poster"
                                 src={APIHelper.posterLarge + movie.poster_path}
                                 onError={() => this.props.deleteMovie(index)}
                                 onClick={() => {
                                    this.setState({
                                        showMovieDetailsModal: true,
                                        selectedMovie: movie,
                                    })
                                }}
                            />
                        )
                    }
                </Slider>
                {
                    !!this.state.showMovieDetailsModal &&
                        <Modal bsSize="large" show={this.state.showMovieDetailsModal} onHide={() => this._closeModal()}>
                            <Modal.Header>
                                <i className="fa fa-times cursor pull-right" onClick={() => this._closeModal()} aria-hidden="true"></i>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <h1>{selectedMovie.title}</h1>
                                            <p>{selectedMovie.overview}</p>
                                            <p>Release Date: {selectedMovie.release_date}</p>
                                            <p>Rated: {selectedMovie.vote_average}/10</p>
                                        </div>
                                        <div className="col-sm-offset-1 col-sm-4 text-right">
                                            <img className="img-responsive poster" src={APIHelper.posterLarge + selectedMovie.poster_path} />
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <a className="btn btn-primary pull-left"
                                   onClick={(e) => {
                                       e.preventDefault();
                                       this._closeModal();
                                       this.props.addMovie(selectedMovie);
                                   }}
                                >
                                Add To Watch-List
                                </a>
                            </Modal.Footer>
                        </Modal>
                }
            </div>
        );
    }
}

export default FeaturedMoviesCarousel;
