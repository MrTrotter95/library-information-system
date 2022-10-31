import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const CheckedOutItem = (props) => {
    const { isLoading, error, data } = useQuery(['viewLoanedBooksByUser', props.book.user.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?userId=${props.book.user.id}`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const bookOnLoan = data.find( item => !item.returnedDate);


    return(
        <tr className="t-row">
            <td className="t-data__book">Lord of the rings</td>
            <td className="t-data">18/09/22</td>
            <td className="t-data">{props.book.user.id}</td>
            <td className="t-data">2 days</td>
            <td className="flex justify-center"><button className="table-button">Return</button></td>
        </tr>
    )
}

export default CheckedOutItem;