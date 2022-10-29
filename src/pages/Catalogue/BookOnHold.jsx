import React from "react";
import CardPopup from '../../components/Cards/CardPopup';
import holdPrompt from '../../assets/images/holdPrompt.png';

const BookOnHold = () => {
    return (
        <div className="popup-bg">
            <CardPopup>
                <div className="flex align-center justify-center">
                    <div><img src={holdPrompt}/></div>
                    <div className="text-end ml-10">
                        <h1 className="h3 red fw-400 mt-0 mb-0">Book Now On Hold</h1>
                        <p className="p1 mb-0 mt-0">You have successfully placed the book on hold.</p>
                        <p className="p1 mb-50 mt-0">You will be notified when it is returned by current holder.</p>
                        <button className="primary-button full-width">Continue</button>
                    </div>
                </div>
            </CardPopup>
        </div>
    )
}

export default BookOnHold;