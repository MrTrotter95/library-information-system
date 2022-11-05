import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const EditPassword = () => {
    const { isLoading, error, data } = useQuery(['viewUserInfoByUser'], () =>
    axios.get('http://localhost:3001/users?id=3').then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="ml-200 mr-200">
        <h1 className="h4 fw-400 text-center mb-50">Edit Password</h1>
            <form>
                <div className="flex flex-column mb-30">
                    <label className="label red fw-400">Change your password:</label>
                    <input className="input" type="password" placeholder="********"/>
                </div>
                <button className="primary-button full-width" type="submit">Confirm & Save</button>
            </form>
    </div>
    )
}

export default EditPassword;