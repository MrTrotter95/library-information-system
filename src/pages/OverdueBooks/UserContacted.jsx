import React from "react";
import CardPopup from '../../components/Cards/CardPopup';
import emailPrompt from '../../assets/images/emailPrompt.png';

const UserContacted = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={emailPrompt}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">User Contacted</h1>
                        <p className="p1 mb-50 mt-0">You have sent a message to the user about their overdue book loans.</p>
                        <button className="primary-button full-width">Continue</button>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default UserContacted;