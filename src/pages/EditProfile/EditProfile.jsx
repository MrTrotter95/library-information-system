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

const EditProfile = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    let {userId} = useParams();

    const editProfileHandler = (event) => {
        mutation.mutate(
            {
                firstName: firstName,
                lastName: lastName,
                email: email
            }
        )
        event.preventDefault()
    }
    
    const mutation = useMutation(editProfile => {
        return axios.patch('http://localhost:3001/users/'+ userId, editProfile)
    })

    const { isLoading, error, data } = useQuery(['editProfileByUser', userId], () =>
    axios.get(`http://localhost:3001/users/${userId}`).then(res =>
    res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    

    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Edit Profile</h1>
            <hr className="hr mb-50"/>
            <div className="flex flex-row align-center justify-center">
                <div className="mr-50">
                <CardSmall>
                        <form onSubmit={editProfileHandler}>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">First Name</label>
                                <input className="input" type="text" onChange={firstNameChangeHandler} defaultValue={data.firstName} />
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Last Name</label>
                                <input className="input" type="text" onChange={lastNameChangeHandler} defaultValue={data.lastName}/>
                            </div>
                            <div className="flex flex-column mb-20">
                                <label className="label red fw-400">Email</label>
                                <input className="input" type="email" onChange={emailChangeHandler} defaultValue={data.emailAddress}/>
                            </div>
                            <button className="secondary-button full-width mb-20" onClick={()=>{ alert('Temporary password sent to the User!'); }}>Send Temp Password</button>
                            <button type="submit" className="primary-button full-width mb-20" >Confirm Changes</button>
                            <button type="cancel" className="secondary-button full-width">Cancel</button>
                            {mutation.isSuccess && <p className=" mt-30 mb-0 label red fw-400">You have successfully updated the users details.</p>}
                        </form>
                    </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;