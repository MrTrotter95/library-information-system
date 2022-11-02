import React from "react";

const CheckedOutItem = (props) => {
    return(
        <tr className="t-row">
            <td className="t-data__book">{props.book.book.bookTitle}</td>
            <td className="t-data">{props.book.checkedOut}</td>
            <td className="t-data">{props.book.dueDate}</td>
            <td className="flex justify-center"><button className="table-button">Return</button></td>
        </tr>
    )
}

export default CheckedOutItem;