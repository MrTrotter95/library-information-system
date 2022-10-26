import React from "react";
import './CardStyles.css';

const CardSmall = (props) => {
    return (
        <div className="card__small">
            {props.children}
        </div>
    )
}

export default CardSmall;