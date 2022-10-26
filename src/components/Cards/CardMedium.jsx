import React from "react";
import './CardStyles.css';

const CardMedium = (props) => {
    return (
        <div className="card__medium">
            {props.children}
        </div>
    )
}

export default CardMedium;