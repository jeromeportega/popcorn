// Libraries
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Login from './components/Login';
import Intro from './components/Intro';
import List from './components/List';

class PopcornApp extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={Intro} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/list" component={List} />
            </div>
        );
    }
}

export default PopcornApp;
