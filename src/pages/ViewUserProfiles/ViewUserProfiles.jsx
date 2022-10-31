import React from "react";
import CardLarge from '../../components/Cards/CardLarge';
import UserItem from "./UserItem";

const ViewUserProfiles = () => {
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
                        <UserItem/>
                    </tbody>
                </table>
            </CardLarge>
        </div>
    )
}

export default ViewUserProfiles;