import React from "react";
import CardPopup from '../../components/Cards/CardPopup';
import crossPrompt from '../../assets/images/crossPrompt.png';
import { Link } from "react-router-dom";

const RegistrationFailed = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={crossPrompt}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">Registration Failed..</h1>
                        <p className="p1 mb-0 mt-0">Something happened! Please try again.</p>
                        <Link to='/Signup'>
                        <button className="primary-button full-width">Continue</button>
                        </Link>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default RegistrationFailed;