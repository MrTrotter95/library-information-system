import React from "react";
import './AdminDashboard.css';
import userImage from '../../assets/images/userImage.png';

const AdminDashboard = () => {
    return (
        <div className="container">
            <h1 className="h2 red fw-600 mb-0">Administrator Dashboard</h1>
            <hr className="hr"/>
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
            </div>

            <div className="flex wrap justify-center space-between mb-250">
                <button className="admin-btn admin__btn1 mb-40">Add New Book</button>
                <button className="admin-btn admin__btn2 mb-40">View Existing Books</button>
                <button className="admin-btn admin__btn3 mb-40">View Checked Out Books</button>
                <button className="admin-btn admin__btn4 mb-40">View Overdue Books</button>
                <button className="admin-btn admin__btn5 mb-40">View & Edit Users</button>
            </div>
        </div>
    )
}

export default AdminDashboard;