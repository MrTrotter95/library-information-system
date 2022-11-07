import React from "react";
import LoanHistoryItem from './LoanHistoryItem';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const LoanHistory = () => {
    const { isLoading, error, data } = useQuery(['viewUserInfoByUser'], () =>
    axios.get('http://localhost:3001/loanedBooks?_expand=user&_expand=book&_limit=5').then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const loanedHistory = data.filter (item => item.returnedDate);

    return (
        <div className="ml-200 mr-100">
        <h1 className="h4 fw-400 text-center mb-50">Loan History</h1>
            <div className="flex flex-column mb-30">
                {loanedHistory.map( book => <LoanHistoryItem book={book}/> )}
            </div>
    </div>
    )
}

export default LoanHistory;