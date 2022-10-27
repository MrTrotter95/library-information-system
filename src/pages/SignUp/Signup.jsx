import React from "react";
import './Signup.css';
import CardSmall from '../../components/Cards/CardSmall';

const Signup = () => {
    return (
        <div>
            <h1>Fill out our form</h1>
            <CardSmall>
                <form>
                    <label class={"text_label"}>First Name</label>
                    <input type={"text"} placeholder={"Enter your first name"}/>
                    <label>Last Name</label>
                    <input type={"text"} placeholder={"Enter your surname"}/>
                    <label>Email Address</label>
                    <input type={"email"} placeholder={"Enter a valid email address"}/>
                    <label>Date of Birth</label>
                    <input type={"date"} placeholder={"Enter your date of birth"}/>
                    <label>Password</label>
                    <input type={"password"} placeholder={"Enter a secure password"}/>
                    <button type="cancel">Cancel</button>
                    <button type="submit">Sign up!</button>
                </form>
            </CardSmall>
        </div>
    )
}

export default Signup;