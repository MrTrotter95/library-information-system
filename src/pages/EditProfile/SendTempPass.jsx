import React from "react";
import CardPopup from '../../components/Cards/CardPopup';
import tickPrompt from '../../assets/images/emailPrompt.png';

const EditSuccess = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={tickPrompt}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">Sent Temp Password!</h1>
                        <p className="p1 mb-0 mt-0">You have successfully sent a temporary password.</p>
                        <p className="p1 mb-75 mt-0">It will appear in their inbox shortly.</p>
                        <button className="primary-button full-width">Continue</button>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default EditSuccess;