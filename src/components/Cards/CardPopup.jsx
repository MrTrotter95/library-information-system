import React from "react";
import './CardStyles.css';

const CardPopup = (props) => {
    return (
        <div className="card__popup">
            {props.children}
        </div>
    )
}

export default CardPopup;