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
        this._deleteMovie = this._deleteMovie.bind(this);
    }

    componentDidMount() {
        this._getCarouselMovies();
    }

    // Deletes the movie from the carousel if the poster cannot be found
    _deleteMovie(index) {
        let movies = this.state.carouselMovies;
        movies.splice(index, 1);
        this.setState({
            carouselMovies: movies,
        });
    }

    // Runs the API request to retrieve recent top movies
    _getCarouselMovies() {
        APIHelper.getCarouselMovies()
            .then((data) => {
                console.log(data.results.length);
                this.setState({
                    carouselMovies: data.results,
                });
            });
    }

    // Adds a movie from the recent movies to a person's list if they are signed in, or prompts them to sign in if they aren't.
    _addMovie(movie) {
        console.log(movie);
    }

    render() {
        console.log(this.state.carouselMovies);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <div className="jumbotron popup-background">
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
                                            deleteMovie={this._deleteMovie}
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
