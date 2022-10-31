import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const OverdueItem = (props) => {
    const { isLoading, error, data } = useQuery(['viewLoanedBooksByBook', props.book.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?bookId=${props.book.id}`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    //getting todays date
    const date = new Date();
    let day = date.getDate().toString();
    let m = date.getMonth() + 1;
    let month = m.toString();
    let year = date.getFullYear().toString();

    let currentDate = day.concat("/", month, "/", year);

    

    const bookOnLoan = data.find( item => !item.returnedDate);

    const test = data.find( item => item.dueDate)


    return (
        <tr className="t-row">
            <td className="t-data__book">{props.book.book.bookTitle}</td>
            <td className="t-data">{props.book.user.firstName}</td>
            <td className="t-data">{props.book.checkedOut}</td>
            <td className="t-data">{props.book.dueDate}</td>
            <td className="t-data">{}</td>
            <td className="flex justify-center"><button className="table-button">Contact</button></td>
        </tr>
    )
} 

export default OverdueItem;