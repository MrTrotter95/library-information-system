import React from "react";
import CardLarge from '../../components/Cards/CardLarge';
import LoanHistoryItem from './LoanHistoryItem';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const LoanHistory = () => {
    const { isLoading, error, data } = useQuery(['viewUserInfoByUser'], () =>
    axios.get('http://localhost:3001/loanedBooks?_expand=user&_expand=book').then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const loanedHistory = data.filter (item => item.returnedDate);

    return (
        <div className="container">
        <h1 className="h1 red fw-700 text-left mb-0">Loan History</h1>
        <hr className="hr mb-75"/>
        <CardLarge>
            <table className="table">
                <thead className="t-head">
                    <tr>
                        <th>Book Id</th>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Checked Out By</th>
                        <th>Returned Date</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                    {loanedHistory.map( book => <LoanHistoryItem book={book}/> )}
                </tbody>
            </table>
        </CardLarge>
    </div>
    )
}

export default LoanHistory;