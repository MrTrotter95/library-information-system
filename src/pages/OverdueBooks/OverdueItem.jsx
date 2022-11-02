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

    //contacting the date above to match the date format in the database
    let currentDate = year.concat("-", month, "-", day);
    
    let currDate = new Date(currentDate);
    let dueDate = new Date(props.book.dueDate);
    
    const overdueItem = data.find( item => new Date(item.dueDate) < new Date(currentDate) && !item.returnedDate );


    //Checking how many days the book is overdue
    const daysOverdue = parseInt((currDate - dueDate) / (1000 * 60 * 60 * 24))

    return (
        <>
            {overdueItem && <>
                <tr className="t-row">
                    <td className="t-data__book">{props.book.book.bookTitle}</td>
                    <td className="t-data">{props.book.user.lastName}, {props.book.user.firstName}</td>
                    <td className="t-data">{props.book.checkedOut}</td>
                    <td className="t-data">{props.book.dueDate}</td>
                    <td className="t-data"><span className="red fw-600">{daysOverdue}</span> days</td>
                    <td className="flex justify-center"><button className="table-button">Contact</button></td>
                </tr>
            </>}
        </>

    )
} 

export default OverdueItem;