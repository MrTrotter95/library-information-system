import React, { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const PersonalInfo = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const { user } = useAuthContext()

    const fNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    //Allowing a user to edit their personal informaion
    const changeInformationHandler = (event) => {
        mutation.mutate(
            {
                firstName: firstName,
                lastName: lastName,
                emailAddress: email 
            })
        event.preventDefault();
    }

    const mutation = useMutation(changeInformation => {
            return axios.patch('http://localhost:3001/users/'+ user.id, changeInformation)
        })
    

    return (
        <div className="ml-200">
            <h1 className="h4 fw-400 text-center mb-50">Personal Information</h1>
                <form onSubmit={changeInformationHandler}>
                    <div className="flex flex-column mb-30">
                        <label className="label red fw-400">First Name</label>
                        <input className="input" defaultValue={user.firstName} onChange={fNameChangeHandler}/>
                    </div>
                    <div className="flex flex-column mb-30">
                        <label className="label red fw-400">Last Name</label>
                        <input className="input" defaultValue={user.lastName} onChange={lNameChangeHandler}/>
                    </div>
                    <div className="flex flex-column mb-30">
                        <label className="label red fw-400">Email Address</label>
                        <input className="input" type="email" defaultValue={user.emailAddress} onChange={emailChangeHandler}/>
                    </div>
                    <button className="primary-button full-width" type="submit">Confirm & Save</button>
                    {mutation.isSuccess && <p className="label red fw-400">Your account information has successfully been changed.</p>}
                </form>
        </div>
    )
}

export default PersonalInfo;