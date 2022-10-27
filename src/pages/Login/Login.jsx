import React from "react";
import CardSmall from '../../components/Cards/CardSmall';

const Login = () => {
    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Login</h1>
            <hr className="hr"/>
            <div className="flex flex-row align-center justify-center">
                <div className="mr-50">
                    <h1 className="h3 fw-400 mb-0">Don't have an account with us?</h1>
                    <p className="p1 mb-30 mt-0">Click the button below, it's quick and easy to get started with us!</p>
                    <button className="primary-button">Click to sign up</button>
                </div>
                <div>
                    <h1 className="h2 red fw-700 text-center mb-0">Login</h1>
                        <CardSmall>
                            <form>
                                <div className="flex flex-column mb-30">
                                    <label className="label red fw-400">Email Address</label>
                                    <input className="input"/>
                                </div>
                                <div className="flex flex-column mb-30">
                                    <label className="label red fw-400">Password</label>
                                    <input className="input"/>
                                </div>

                                <button className="primary-button__full-width" type="subit">Sign In</button>
                            </form>
                        </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default Login;

