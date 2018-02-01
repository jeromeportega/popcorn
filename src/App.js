// Libraries
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Login from './components/Login';
import Intro from './components/Intro';

class PopcornApp extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={Intro} />
                <Route exact path="/login" component={Login} />
            </div>
        );
    }
}

export default PopcornApp;
