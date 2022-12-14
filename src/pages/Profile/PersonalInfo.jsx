import React, { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const PersonalInfo = () => {
    //State variables and setting methods
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    //Grabing the current logged in user details
    const { user } = useAuthContext()

    //Onchange functions attached to input fields that save users input to the state varaibles above
    const fNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    //OnSubmit function that creates an object 
    const changeInformationHandler = (event) => {
        mutation.mutate(
            {
                firstName: firstName,
                lastName: lastName,
                emailAddress: email 
            })
        event.preventDefault();
    }

    //Mutation that takes the object from above and updates the database
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