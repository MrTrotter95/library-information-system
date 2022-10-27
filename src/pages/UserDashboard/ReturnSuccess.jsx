import React from "react";
import './UserDashboard.css';
import CardPopup from '../../components/Cards/CardPopup';
import tick from '../../assets/images/tickPrompt.png';

const ReturnSuccess = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={tick}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">Successfully Returned</h1>
                        <p className="p1 mb-0 mt-0">You have successfully returned the book.</p>
                        <p className="p1 mb-75 mt-0">Feel free to loan out some more books!</p>
                        <button className="primary-button__full-width">Continue</button>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default ReturnSuccess;