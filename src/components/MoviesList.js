import React, { Component } from 'react';
import * as Movies from './sampleList.js';
import * as APIHelper from '../APIHelper.js';
import * as utils from '../helper-functions.js';

class MoviesList extends Component {
    constructor() {
        super();

        this.state = {
            movies: Movies.movieList,
        }
    }

    render() {

        return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Movie</th>
                        <th className="text-center">Director</th>
                        <th className="text-center">Star Actor</th>
                        <th className="text-center">Genre</th>
                        <th className="text-center">Year</th>
                        <th className="text-center">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.length > 0 &&
                            this.state.movies.map((movie, index) =>
                                <tr key={index}>
                                    <td className="text-center"><img className="img-responsive list-poster center-block" src={APIHelper.posterLarge + movie.poster_path} /></td>
                                    <td style={{verticalAlign: 'middle'}}><p className="text-center">{movie.credits.crew[0].name}</p></td>
                                    <td style={{verticalAlign: 'middle'}}><p className="text-center">{movie.credits.cast[0].name}</p></td>
                                    <td style={{verticalAlign: 'middle'}}><p className="text-center">{movie.genres[0].name}</p></td>
                                    <td style={{verticalAlign: 'middle'}}><p className="text-center">{utils.shortenDate(movie.release_date)}</p></td>
                                    <td style={{verticalAlign: 'middle'}}><p className="text-center">{movie.vote_average}</p></td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        );
    }
}

export default MoviesList;
