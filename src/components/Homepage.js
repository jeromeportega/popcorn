// Libraries
import React, { Component } from 'react';
import * as APIHelper from '../APIHelper.js';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Animation Libraries
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

// Components
import FeaturedMoviesCarousel from './featured-movies-carousel';

// Declare Animations to be used below.
const styles = {
    fadeIn: {
        animation: 'x .5s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    }
}

class Homepage extends Component {
    constructor() {
        super();

        this.state = {
            carouselMovies: [],
        }

        this._addMovie = this._addMovie.bind(this);
    }

    componentDidMount() {
        this._getCarouselMovies();
    }

    _getCarouselMovies() {
        APIHelper.getCarouselMovies()
            .then((data) => {
                console.log(data.results.length);
                this.setState({
                    carouselMovies: data.results,
                });
            });
    }

    _addMovie(movie) {
        console.log(movie);
    }

    render() {
        console.log(this.state.carouselMovies);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <div className="jumbotron">
                            <h1>Popcorn.</h1>
                            <hr />
                            <p>Build Your Movie Lists, Share Them With Friends, And Find A Watching Buddy!</p>
                            <p><Link className="btn btn-primary btn-lg" to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {
                            this.state.carouselMovies.length > 0 &&
                                <StyleRoot>
                                    <div style={styles.fadeIn}>
                                        <FeaturedMoviesCarousel
                                            movies={this.state.carouselMovies}
                                            addMovie={this._addMovie}
                                        />
                                    </div>
                                </StyleRoot>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
