import React from "react";
import CardPopup from '../../components/Cards/CardPopup';
import tick from '../../assets/images/tickPrompt.png';

const AreYourSureDelete = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={tick}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">Are you sure?</h1>
                        <p className="p1 mb-50 mt-0">Clicking continue will delete this book from the catalogue.</p>
                        <button className="primary-button full-width">Continue</button>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default AreYourSureDelete;