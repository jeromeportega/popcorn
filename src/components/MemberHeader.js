import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MemberHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default header-style">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">P</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/list">List</Link></li>
                                <li><Link to="/login">Discover</Link></li>
                                <li><Link to="/login">Share</Link></li>
                                <li><Link to="/login">Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MemberHeader;
