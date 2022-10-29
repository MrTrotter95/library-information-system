import React from "react";
import CardPopup from '../../components/Cards/CardPopup';
import crossPrompt from '../../assets/images/crossPrompt.png';

const LoanFailed = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={crossPrompt}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">Checking Out Failed..</h1>
                        <p className="p1 mb-0 mt-0">Something happened! Please try again.</p>
                        <p className="p1 mb-50 mt-0">Contact library Administrator if issue persists.</p>
                        <button className="primary-button full-width">Return</button>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default LoanFailed;