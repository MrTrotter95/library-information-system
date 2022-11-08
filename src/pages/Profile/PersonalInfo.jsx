import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const PersonalInfo = () => {
    const { user } = useAuthContext()

    const { isLoading, error, data } = useQuery(['viewUserInfoByUser'], () =>
    axios.get('http://localhost:3001/users?id=3').then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className="ml-200 mr-200">
        <h1 className="h4 fw-400 text-center mb-50">Personal Information</h1>
            <form>
                <div className="flex flex-column mb-30">
                    <label className="label red fw-400">First Name</label>
                    <input className="input" placeholder={user.firstName}/>
                </div>
                <div className="flex flex-column mb-30">
                    <label className="label red fw-400">Last Name</label>
                    <input className="input" placeholder={user.lastName}/>
                </div>
                <div className="flex flex-column mb-30">
                    <label className="label red fw-400">Email Address</label>
                    <input className="input" type="email" placeholder={user.emailAddress}/>
                </div>
                <div className="flex flex-column mb-30">
                    <label className="label red fw-400">Date of Birth</label>
                    <input className="input" type="date"/>
                </div>
                <button className="primary-button full-width" type="submit">Confirm & Save</button>
            </form>
    </div>
    )
}

export default PersonalInfo;