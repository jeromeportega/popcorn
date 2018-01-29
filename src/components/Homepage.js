import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import ControlledCarousel from './controlled-carousel';
import * as APIHelper from '../APIHelper.js';
import * as $ from 'jquery';

class Homepage extends Component {
    constructor() {
        super();

        this.state = {
            carouselMovies: [],
        }
    }

    componentDidMount() {
        this.getCarouselMovies();
    }

    getCarouselMovies() {
        APIHelper.getCarouselMovies()
            .then((data) => {
                console.log(data.results.length);
                this.setState({
                    carouselMovies: data.results,
                });
            });
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
                    <div className="col">
                        <ControlledCarousel movies={this.state.carouselMovies}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
