import React from "react";

const LoanedItem = (props) => {
    return (
        <tr className="t-row">
            <td className="t-data__book">{props.book.book.bookTitle}</td>
            <td className="t-data">{props.book.user.lastName}, {props.book.user.firstName}</td>
            <td className="t-data">{props.book.checkedOut}</td>
            <td className="t-data">{props.book.dueDate}</td>
        </tr>
    )
}

export default LoanedItem;