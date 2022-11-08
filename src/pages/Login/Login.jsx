import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import CardSmall from '../../components/Cards/CardSmall';
import { useAuthContext } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { user, signIn } = useAuthContext();
    const navigate = useNavigate();

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const signInHandler = (event) => {
        event.preventDefault()
        axios.get(`http://localhost:3001/users?emailAddress=${email}&password=${password}`).then(res =>
            {if(res.data.length === 1) {
                signIn(res.data[0])
                if(res.data[0].isAdmin === true) {
                    navigate('/AdminDash')
                } else {
                    navigate('/Dashboard')
                }
            } else {
                window.alert("Email address or password is incorrect. Please try again");
            }}
    )}

    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Login</h1>
            <hr className="hr"/>
            <div className="flex flex-row align-center justify-center">
                <div className="mr-50">
                    <h1 className="h3 fw-400 mb-0">Don't have an account with us?</h1>
                    <p className="p1 mb-30 mt-0">Click the button below, it's quick and easy to get started with us!</p>
                    <Link to='/Signup'>
                        <button className="primary-button large">Click to sign up</button>
                    </Link>
                    
                </div>
                <div>
                    <h1 className="h2 red fw-700 text-center mb-0">Login</h1>
                        <CardSmall>
                            <form onSubmit={signInHandler}>
                                <div className="flex flex-column mb-30">
                                    <label className="label red fw-400">Email Address</label>
                                    <input className="input" onChange={emailHandler}/>
                                </div>
                                <div className="flex flex-column mb-30">
                                    <label className="label red fw-400">Password</label>
                                    <input className="input" type="password" onChange={passwordHandler}/>
                                </div>
                                <button className="primary-button full-width" type="submit">Sign In</button>
                            </form>
                        </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default Login;

