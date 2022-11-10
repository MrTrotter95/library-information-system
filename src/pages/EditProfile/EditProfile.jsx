import React from "react";
import { useParams } from "react-router-dom";
import CardSmall from '../../components/Cards/CardSmall';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useState } from "react";
import {  useMutation } from '@tanstack/react-query';

const EditProfile = () => {
    //State variables and setting methods
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    //Grabing the book ID from the route.
    let {userId} = useParams();

    //OnSubmit function that creates a book object using the state variables above
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
    
    //Mutation that patches/updates the object above to the database
    const mutation = useMutation(editProfile => {
        return axios.patch('http://localhost:3001/users/'+ userId, editProfile)
    })

    //Querying the database getting the user by their userId.
    const { isLoading, error, data } = useQuery(['editProfileByUser', userId], () =>
    axios.get(`http://localhost:3001/users/${userId}`).then(res =>
    res.data
    )
    )

    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (error) return 'An error has occurred: ' + error.message

    //Onchange functions attached to input fields that save users input to the state varaibles above
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