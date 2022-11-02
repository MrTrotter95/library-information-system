import React from "react";
import CardLarge from '../../components/Cards/CardLarge';
import UserItem from "./UserItem";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const ViewUserProfiles = () => {
    const { isLoading, error, data } = useQuery(['users'], () =>
    axios.get('http://localhost:3001/users').then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">User Profiles</h1>
            <hr className="hr mb-75"/>
            <CardLarge>
                <table className="table">
                    <thead className="t-head">
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Loaned Items</th>
                            <th>Overdue Items</th>
                            <th>Edit User Details</th>
                        </tr>
                    </thead>
                    <tbody className="t-body">
                    {data.map( user => <UserItem user={user}/> )}
                        
                    </tbody>
                </table>
            </CardLarge>
        </div>
    )
}

export default ViewUserProfiles;