import React from "react";
import CardLarge from '../../components/Cards/CardLarge';
import LoanedItem from "./LoanedItem";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const LoanedBooks = () => {
    //Querying the database to get all loaned books, books, and users.
    const { isLoading, error, data } = useQuery(['viewLoanedBooks'], () =>
    axios.get('http://localhost:3001/loanedBooks?_expand=user&_expand=book').then(res =>
      res.data
    )
    )

    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (error) return 'An error has occurred: ' + error.message

    //Filtering the response object to find all books that are still checked out.
    const bookOnLoan = data.filter( item => !item.returnedDate);

    return (
        <div className="container">
            <h1 className="h1 red fw-600 mb-0">Loaned Books</h1>
            <hr className="hr mb-75"/>
            <div>
                <CardLarge>
                    <div className="flex mb-75">
                        <div className="flex align-center">
                            <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">{bookOnLoan.length}</h1>
                            <p className="h4 mt-0 mb-0">Books currently checked out by members.</p>
                        </div>
                    </div>
                    
                    <table className="table">
                        <thead className="t-head">
                            <tr>
                                <th>Book Title</th>
                                <th>Member</th>
                                <th>Date Checked Out</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody className="t-body">
                            {bookOnLoan.map( book => <LoanedItem book={book}/> )}
                        </tbody>
                    </table>
                </CardLarge>
            </div>
        </div>
    )
}

export default LoanedBooks;