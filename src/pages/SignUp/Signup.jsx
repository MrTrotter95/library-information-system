import React, {useState} from "react";
import CardSmall from '../../components/Cards/CardSmall';
import {  useMutation } from '@tanstack/react-query';
import axios from "axios";

const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [dob, setDob] = useState();
    const [password, setPassword] = useState();

    const onChangeFName = (event) => {
        setFirstName(event.target.value);
    }

    const onChangeLName = (event) => {
        setLastName(event.target.value);
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeDOB = (event) => {
        setDob(event.target.value);
    }

    const onChangePass = (event) => {
        setPassword(event.target.value);
    }

    const addAccountHandler = (event) => {
        mutation.mutate(
            {
                isAdmin: false, 
                firstName: firstName, 
                lastName: lastName, 
                password: password,
                emailAddress: email,
                dateOfBirth: dob
            })
            event.preventDefault();
    }

    const mutation = useMutation(newUser => {
        return axios.post('http://localhost:3001/users', newUser)
      })

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
                                <input className="input" type="text" placeholder="Enter your first name" onChange={onChangeFName}/>
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Last Name</label>
                                <input className="input" type="text" placeholder="Enter your surname" onChange={onChangeLName}/>
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Email Address</label>
                                <input className="input" type="email" placeholder="Enter a valid email address" onChange={onChangeEmail}/>
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Date of Birth</label>
                                <input className="input" type="date" placeholder="Enter your date of birth" onChange={onChangeDOB}/>
                            </div>
                            <div className="flex flex-column mb-40">
                                <label className="label red fw-400">Password</label>
                                <input className="input" type="password" placeholder="Enter a secure password" onChange={onChangePass}/>
                            </div>
                            <div className="flex">
                                <button type="cancel" className="secondary-button full-width mr-20">Cancel</button>
                                <button type="submit" className="primary-button full-width last-item" onClick={addAccountHandler}>Sign up!</button>
                            </div>
                        </form>
                    </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default Signup;