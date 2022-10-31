import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const LoanedItem = (props) => {
    const { isLoading, error, data } = useQuery(['viewLoanedBooksByBook', props.book.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?bookId=${props.book.id}`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const bookOnLoan = data.find( item => !item.returnedDate);

    return (
        <>
            {bookOnLoan && <>
                <tr className="t-row">
                    <td className="t-data__book">{props.book.book.bookTitle}</td>
                    <td className="t-data">{props.book.user.firstName}</td>
                    <td className="t-data">{props.book.checkedOut}</td>
                    <td className="t-data">{props.book.dueDate}</td>
                </tr>
            </>}
        </>

    )

}

export default LoanedItem;