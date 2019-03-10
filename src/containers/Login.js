import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="sign-in">
                <div className="signin-logo">
                    <img src="../politico.png" alt="brand-logo"/>
                </div>
                <div className="login-form">
                    <h1><i className="fas fa-unlock-alt"></i></h1>
                    <div className="failure" id="failure">
                        <p>Wrong Username or Password</p>
                    </div>
                    <form method="POST" id="login" name="login" action="">
                        <div>
                            <input id="email" type="text" name="email" placeholder="Email"/>
                        </div>
                        <div>
                            <input id="password" type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="login-buttons">
                            <input type="button" className="btn btn-login" value="Sign In"/>
                        </div>
                    </form>
                    <div className="sign-in-footer">
                        <div className="forgot-password">
                            <a href="/password-reset">Forgot Password?</a>
                        </div>
                    </div>
                </div> 
            </div> 
        );
    }
}

export default Login;