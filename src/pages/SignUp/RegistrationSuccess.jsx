import React from "react";
import CardPopup from '../../components/Cards/CardPopup';
import tickPrompt from '../../assets/images/tickPrompt.png';
import { Link } from "react-router-dom";

const RegistrationSuccess = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={tickPrompt}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">Account Registered!</h1>
                        <p className="p1 mb-0 mt-0">You have successfully registered an account.</p>
                        <p className="p1 mb-75 mt-0">You will be redirected to your dashboard.</p>
                        <Link to='/Login'>
                        <button className="primary-button full-width">Continue</button>
                        </Link>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default RegistrationSuccess;