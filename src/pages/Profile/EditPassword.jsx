import React, { useState } from "react";
import { useMutation} from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const EditPassword = () => {
    //State variables and setting methods
    const [password, setPassword] = useState();

    //Grabing the current logged in user details
    const { user } = useAuthContext()

    //Onchange function attached to input fields that save users input to the state varaibles above
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    //onSubmit function that creates a change password object
    const changePasswordHandler = (event) => {
        mutation.mutate(
            {
                password: password
            })
        event.preventDefault();
    }

    //Mutation the patches/updates the users password using the object above
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