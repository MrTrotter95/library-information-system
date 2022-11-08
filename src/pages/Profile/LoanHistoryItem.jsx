import React from "react";
import CardSmall from '../../components/Cards/CardSmall';

const LoanHistoryItem = (props) => {
    return (
        <div className="mb-30">
            <CardSmall>
                <h1  className="h5 fw-600 mb-20 mt-0">{props.book.book.bookTitle}</h1>
                <div className="flex align-center mb-20">
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Author: </p>
                    <p className="p1 mt-0 mb-0 ">{props.book.book.author}</p>
                </div>
                <div className="flex align-center">
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Checked Out: </p>
                    <p className="p1 mt-0 mb-0 mr-30">{props.book.checkedOut}</p>
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Returned: </p>
                    <p className="p1 mt-0 mb-0 ">{props.book.returnedDate}</p>
                </div>
            </CardSmall>
        </div>
    )
}

export default LoanHistoryItem;