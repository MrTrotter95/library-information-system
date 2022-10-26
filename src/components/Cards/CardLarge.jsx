import React from "react";
import './CardStyles.css';

const CardLarge = (props) => {
    return (
        <div className="card__large">
            {props.children}
        </div>
    )
}

export default CardLarge;