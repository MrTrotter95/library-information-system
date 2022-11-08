import React from "react";
import { useState, useEffect } from "react";

const RequestHoldItem = (props) => {
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        if(props.book.loanedBooks[0].returnedDate) {
            setIsAvailable(true);
        } else {
            setIsAvailable(false);
        }

    },[props.book.loanedBooks[0].returnedDate]);

    return(
        <tr className="t-row">
            <td className="t-data__book">{props.book.bookTitle}</td>
            <td className="t-data">{props.book.author}</td>
            <td className="t-data">{props.book.loanedBooks[0].dueDate}</td>
            {isAvailable ? <td className="t-data">{props.book.loanedBooks[0].returnedDate}</td> : <td className="t-data">Not Returned</td>}
            {isAvailable ? <td className="t-data red">Yes</td> : <td className="t-data red">No</td>}
            {isAvailable ? <td className="flex justify-center"><button className="table-button" >Checkout</button></td> : <td></td>}
        </tr>
    )
}

export default RequestHoldItem;