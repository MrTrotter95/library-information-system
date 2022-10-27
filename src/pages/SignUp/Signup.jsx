import React from "react";
import './Signup.css';
import CardSmall from '../../components/Cards/CardSmall';

const Signup = () => {
    return (
        <div>
            <h1 className="h3 red">Fill out our form</h1>
            <CardSmall>
                <form>
                    <div className="flex flex-column mb-20"><label className="label red fw-400">First Name</label>
                    <input className="input" type="text" placeholder="Enter your first name"/></div>
                    <div className="flex flex-column mb-20"><label className="label red fw-400">Last Name</label>
                    <input className="input" type="text" placeholder="Enter your surname"/></div>
                    <div className="flex flex-column mb-20"><label className="label red fw-400">Email Address</label>
                    <input className="input" type="email" placeholder="Enter a valid email address"/></div>
                    <div className="flex flex-column mb-20"><label className="label red fw-400">Date of Birth</label>
                    <input className="input" type="date" placeholder="Enter your date of birth"/></div>
                    <div className="flex flex-column mb-20"><label className="label red fw-400">Password</label>
                    <input className="input" type="password" placeholder="Enter a secure password"/></div>
                    <button type="cancel">Cancel</button>
                    <button type="submit">Sign up!</button>
                </form>
            </CardSmall>
        </div>
    )
}

export default Signup;