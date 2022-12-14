import React from "react";
import CardLarge from '../../components/Cards/CardLarge';
import OverdueItem from "./OverdueItem";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const OverdueBooks = () => {
    //Querying the database to get all loaned books, books, and users
    const { isLoading, error, data } = useQuery(['viewOverdueBooks'], () =>
    axios.get('http://localhost:3001/loanedBooks?_expand=user&_expand=book').then(res =>
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

    //Filtering the information to find overdue books
    const bookOverdue = data.filter( item => !item.returnedDate);
    const overdueItems = bookOverdue.filter (item => new Date(item.dueDate) <  new Date(currentDate));

    return (
        <div className="container">
            <h1 className="h1 red fw-600 mb-0">Overdue Books</h1>
            <hr className="hr mb-75"/>
            <div>
                <CardLarge>
                    <div className="flex mb-75">
                        <div className="flex align-center">
                            <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">{overdueItems.length}</h1>
                            <p className="h4 mt-0 mb-0">Books currently overdue.</p>
                        </div>
                    </div>
                    
                    <table className="table">
                        <thead className="t-head">
                            <tr>
                                <th>Book Title</th>
                                <th>Member</th>
                                <th>Date Checked Out</th>
                                <th>Due Date</th>
                                <th>Overdue By</th>
                                <th>Contact User</th>
                            </tr>
                        </thead>
                        <tbody className="t-body">
                            {data.map( book => <OverdueItem book={book}/> )}
                        </tbody>
                    </table>
                </CardLarge>
            </div>
        </div>
    )
}

export default OverdueBooks;