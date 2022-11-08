import React, { useState } from "react";
import { useMutation} from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const EditPassword = () => {
    const [password, setPassword] = useState();
    const { user } = useAuthContext()

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    //Allowing a user to change their password
    const changePasswordHandler = (event) => {
        mutation.mutate(
            {
                password: password
            })
        event.preventDefault();
    }

    const mutation = useMutation(changePass => {
            return axios.patch('http://localhost:3001/users/'+ user.id, changePass)
        })


    return (
        <div className="ml-200">
        <h1 className="h4 fw-400 text-center mb-50">Edit Password</h1>
            <form onSubmit={changePasswordHandler}>
                <div className="flex flex-column mb-20">
                    <label className="label red fw-400">Change your password:</label>
                    <input className="input" type="password" defaultValue={user.password} onChange={passwordChangeHandler}/>
                </div>
                <button className="primary-button full-width" type="submit">Confirm & Save</button>
                {mutation.isSuccess && <p className="label red fw-400">Your password has successfully been changed.</p>}
                
            </form>
    </div>
    )
}

export default EditPassword;