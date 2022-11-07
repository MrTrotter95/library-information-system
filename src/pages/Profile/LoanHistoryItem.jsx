import React from "react";
import CardSmall from '../../components/Cards/CardSmall';

const LoanHistoryItem = (props) => {
    return (
        
        <div className="mb-30">
            <CardSmall>
                <tr className="t-row">
                    <td className="t-data__book">{props.book.book.bookTitle}</td>
                    <div className="mr-20"></div>
                    <td className="t-data__book">{props.book.book.author}</td>
                </tr>
            </CardSmall>
        </div>
    )
}

export default LoanHistoryItem;