import React from "react";
import CardSmall from '../../components/Cards/CardSmall';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <div>
                    <h3>Don't have an account with us?</h3>
                    <p>Click the button below, it's quick and easy to get started with us!</p>
                    <button>Click to sign up</button>
                </div>

                <div>
                    <h2>Login</h2>
                        <CardSmall>
                            <form>
                                <label>Email Address</label>
                                <input/>
                                <label>Password</label>
                                <input/>
                                <button type="subit">Sign In</button>
                            </form>
                        </CardSmall>
                </div>
            </div>

            <h1 className="h1">Login Header 1</h1>
            <h1 className="h2">Login Header 2</h1>
            <h1 className="h3">Login Header 3</h1>
            <h1 className="h4">Login Header 4</h1>
            <p className="p1">Standard paragraph text</p>
            <p className="p1__small">Small paragraph text</p>
            <p className="label">Standard label text</p>
            <p className="p1__small"></p>
            <button className="primary-button">Test</button>
            <button className="secondary-button">Test</button>
        </div>
    )
}

export default Login;

