import React, { Component } from 'react';
import * as APIHelper from '../APIHelper';
import MemberHeader from './MemberHeader';
import SearchOptions from './SearchOptions';
import MoviesList from './MoviesList';
import * as sampleList from './sampleList';

class List extends Component {
    constructor() {
        super();

        this.state = {
            moviesIds: [],
            movies: sampleList,
        }
    }

    _getMovies() {
        APIHelper.getCarouselMovies()
            .then((data) => {
                console.log(data.results);
                this._getMovieDetails(data.results);
            });
    }

    _getMovieDetails(movies) {
        for (let i = 0; i < movies.length; i++) {
            APIHelper.getListMovieDetails(movies[i].id)
                .then((data) => {
                    let movies = this.state.movies;
                    console.log(data);
                    movies.push(data);
                    this.setState({
                        movies: movies,
                    });
                });
        }
    }

    render() {
        console.log(this.state.movies);

        return (
            <div>
                <MemberHeader />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <SearchOptions />
                        </div>
                        <div className="col-sm-10">
                            <MoviesList movies={this.state.movies} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;
