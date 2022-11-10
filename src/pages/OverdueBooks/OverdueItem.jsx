import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const OverdueItem = (props) => {
    //Querying the database to get the loaned books by ID
    const { isLoading, error, data } = useQuery(['viewLoanedBooksByBook', props.book.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?bookId=${props.book.id}`).then(res =>
      res.data
    )
    )

    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (error) return 'An error has occurred: ' + error.message

    //getting todays date
    const date = new Date();
    let day = date.getDate().toString();
    let m = date.getMonth() + 1;
    let month = m.toString();
    let year = date.getFullYear().toString();

    //concacting the date above to match the date format in the database
    let currentDate = year.concat("-", month, "-", day);
    
    //Creating a current date and due date
    let currDate = new Date(currentDate);
    let dueDate = new Date(props.book.dueDate);
    
    //Finding overdue items to check if items due date is past the current date.
    // if it is the overdueItem array will be populated with the results.
    const overdueItem = data.find( item => new Date(item.dueDate) < new Date(currentDate) && !item.returnedDate );


    //Checking how many days the book is overdue
    const daysOverdue = parseInt((currDate - dueDate) / (1000 * 60 * 60 * 24))

    //OnClick function to let the user know they have contacted the user regading their overdue book.
    const contactUser = () => {
        alert("you contacted the user regarding their overdue book.");
    }

    return (
        <>
            {overdueItem && <>
                <tr className="t-row">
                    <td className="t-data__book">{props.book.book.bookTitle}</td>
                    <td className="t-data">{props.book.user.lastName}, {props.book.user.firstName}</td>
                    <td className="t-data">{props.book.checkedOut}</td>
                    <td className="t-data">{props.book.dueDate}</td>
                    <td className="t-data"><span className="red fw-600">{daysOverdue}</span> days</td>
                    <td className="flex justify-center"><button className="table-button" onClick={contactUser}>Contact</button></td>
                </tr>
            </>}
        </>

    )
} 

export default OverdueItem;