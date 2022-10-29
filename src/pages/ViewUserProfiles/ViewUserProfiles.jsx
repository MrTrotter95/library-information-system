import React from "react";
import './ViewUserProfiles.css';
import userImage from '../../assets/images/userImage.png';
import CardLarge from '../../components/Cards/CardLarge';

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
                        <tr className="t-row">
                            <td className="t-data">0001</td>
                            <td className="t-data__book">SMITH, John</td>
                            <td className="t-data">4</td>
                            <td className="t-data red">2</td>
                            <td className="flex justify-center"><button className="table-button">Edit User</button></td>
                        </tr>
                        <tr className="t-row">
                            <td className="t-data">0002</td>
                            <td className="t-data__book">DOE, Jane</td>
                            <td className="t-data">2</td>
                            <td className="t-data">0</td>
                            <td className="flex justify-center"><button className="table-button">Edit User</button></td>
                        </tr>
                    </tbody>
                </table>
            </CardLarge>
        </div>
    )
}

export default ViewUserProfiles;