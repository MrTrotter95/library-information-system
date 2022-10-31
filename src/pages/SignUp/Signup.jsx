import React from "react";
import CardSmall from '../../components/Cards/CardSmall';

const Signup = () => {
    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Signup</h1>
            <hr className="hr"/>
            <div className="flex align-center justify-center">
                <div className="flex flex-column">
                    <h1 className="h3 red text-center mt-50 mb-0">Fill out our form</h1>
                    <CardSmall>
                        <form>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">First Name</label>
                                <input className="input" type="text" placeholder="Enter your first name"/>
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Last Name</label>
                                <input className="input" type="text" placeholder="Enter your surname"/>
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Email Address</label>
                                <input className="input" type="email" placeholder="Enter a valid email address"/>
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Date of Birth</label>
                                <input className="input" type="date" placeholder="Enter your date of birth"/>
                            </div>
                            <div className="flex flex-column mb-40">
                                <label className="label red fw-400">Password</label>
                                <input className="input" type="password" placeholder="Enter a secure password"/>
                            </div>
                            <div className="flex">
                                <button type="cancel" className="secondary-button full-width mr-20">Cancel</button>
                                <button type="submit" className="primary-button full-width last-item">Sign up!</button>
                            </div>
                        </form>
                    </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default Signup;