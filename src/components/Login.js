import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoginHeader from './LoginHeader';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }
    }

    _handleInputChange(e) {
        if (e.currentTarget.name === "email") {
            this.setState({
                email: e.currentTarget.value,
            });
        } else if (e.currentTarget.name === 'password') {
            this.setState({
                password: e.currentTarget.value,
            });
        }
    }

    _showHidePassword() {
        if (this.state.showPassword === true) {
            this.setState({
                showPassword: false,
            });
        } else if (this.state.showPassword === false) {
            this.setState({
                showPassword: true,
            });
        }
    }

    _loginUser() {
        console.log(this.state.email);
        console.log(this.state.password);
        if (!this.state.email) return;
        if (!this.state.password) return;
        this.setState({
            reroute: true,
        });
    }

    render() {
        return (
            <div>
                <LoginHeader />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="jumbotron popup-background">
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Email Address:</label>
                                        <div className="col-sm-10">
                                            <input className="form-control"
                                                   value={this.state.email}
                                                   name="email"
                                                   onChange={(e) => this._handleInputChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2">Password</label>
                                        <div className="col-sm-9">
                                            <input type={!this.state.showPassword ? 'password' : 'text'}
                                                   className="form-control"
                                                   name="password"
                                                   value={this.state.password}
                                                   onChange={(e) => this._handleInputChange(e)}
                                            />
                                        </div>
                                        <div className="col-sm-1">
                                            <div className="btn btn-primary btn-sm" onClick={() => {this._showHidePassword()}}>{!this.state.showPassword ? 'Show' : 'Hide'}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn btn-primary cursor" onClick={() => this._loginUser()}>Log In</div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // This just redirects the user to their dashboard if they are already signed in, or have signed in succesfully.
                    !!this.state.reroute &&
                        <Redirect to="/list" push />
                }
            </div>
        );
    }
}

export default Login;
