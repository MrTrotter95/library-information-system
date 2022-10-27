import React from "react";
import './UserDashboard.css';
import userImage from '../../assets/images/userImage.png';
import CardLarge from '../../components/Cards/CardLarge';

const UserDashboard = () => {
    return (
        <div className="container">
            <h1 className="h2 red fw-600 mb-0">Dashboard</h1>
            <hr/>
            <div>
                <div className="flex flex-row mt-50 mb-40">
                    <div>
                        <img src={userImage}/>
                    </div>
                    <div className="ml-40">
                        <h1 className="h2 red fw-600 mt-0 mb-0">Welcome back "First Name"!</h1>
                        <p className="h4 fw-400 mt-0">What would you like to do today?</p>
                    </div>
                </div>
                
                <div className="mb-40">
                    <CardLarge>
                        <div className="flex">
                            <div className="flex align-center">
                                <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">6</h1>
                                <p className="h4 mt-0 mb-0">Books currently checked out.</p>
                            </div>
                            <div className=" flex last-item align-center">
                                <button className="primary-button__large">View Books</button>
                            </div>
                            
                        </div>
                    </CardLarge>
                </div>

                <div>

                <CardLarge>
                    <div className="flex">
                        <div className="flex align-center">
                            <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">2</h1>
                            <p className="h4 mt-0 mb-0">Books currently overdue.</p>
                        </div>
                        <div className=" flex last-item align-center">
                            <button className="primary-button__large">Hide</button>
                        </div>
                    </div>
                    <table className="table">
                        <thead className="t-head">
                            <tr>
                                <th>Book Title</th>
                                <th>Date Checked Out</th>
                                <th>Due Date</th>
                                <th>Overdue By</th>
                                <th>Return Book</th>
                            </tr>
                        </thead>
                        <tbody className="t-body">
                            <tr className="t-row">
                                <td className="t-data__book">Lord of the rings</td>
                                <td className="t-data">18/09/22</td>
                                <td className="t-data">18/10/22</td>
                                <td className="t-data">2 days</td>
                                <td className="flex justify-center"><button className="table-button">Return</button></td>
                            </tr>
                        </tbody>
                    </table>
                </CardLarge>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;