import React from "react";

const LoanHistoryItem = (props) => {
    return (
        <tr className="t-row">
        <td className="t-data">{props.book.bookId}</td>
        <td className="t-data__book">{props.book.book.bookTitle}</td>
        <td className="t-data__book">{props.book.book.author}</td>
        <td className="t-data">{props.book.user.lastName}, {props.book.user.firstName}</td>
        <td className="t-data">{props.book.returnedDate}</td>
    </tr>
    )
}

export default LoanHistoryItem;