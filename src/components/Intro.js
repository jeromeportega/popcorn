import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import Homepage from './Homepage';

class Intro extends Component {

    render() {
        return (
            <div>
                <LoginHeader />
                <Homepage />
            </div>
        );
    }
}

export default Intro;
