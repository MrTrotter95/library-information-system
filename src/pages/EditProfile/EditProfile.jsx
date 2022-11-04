import React from "react";
import { useParams } from "react-router-dom";
import CardSmall from '../../components/Cards/CardSmall';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useState } from "react";
import {  useMutation } from '@tanstack/react-query';
import EditSuccess from "./EditSuccess";
import ConfirmationFailed from "./ConfirmationFailed";
import SendTempPass from "./SendTempPass";

const Profile = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    let {profileId} = useParams();

    const editProfileHandler = () => {
        mutation.mutate(
            {
                id: profileId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                dateOfBirth: dateOfBirth
            }
        )
    }

    const mutation = useMutation(editProfile => {
        return axios.put('http://localhost:3001/profile/'+ profileId, editProfile)
      })

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const dateOfBirthChangeHandler = (event) => {
        setDateOfBirth(event.target.value);
    }

    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Edit Profile</h1>
            <hr className="hr mb-50"/>
            <div className="flex flex-row align-center justify-center">
                <div className="mr-50">
                <CardSmall>
                        <form>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">First Name</label>
                            <input className="input" type="text" onChange={firstNameChangeHandler}/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Last Name</label>
                            <input className="input" type="text" onChange={lastNameChangeHandler}/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Email</label>
                            <input className="input" type="email" onChange={emailChangeHandler}/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Date of Birth</label>
                            <input className="input" type="date" onChange={dateOfBirthChangeHandler}/></div>
                            <button type="submit" className="secondary-button full-width mb-20" onClick={editProfileHandler}>Send Temp Password</button>
                            <button type="submit" className="primary-button full-width mb-20" onClick={editProfileHandler}>Confirm Changes</button>
                            <button type="cancel" className="secondary-button full-width">Cancel</button>
                        </form>
                    </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default Profile;