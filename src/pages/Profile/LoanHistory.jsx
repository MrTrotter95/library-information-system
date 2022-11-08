import React from "react";
import LoanHistoryItem from './LoanHistoryItem';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const LoanHistory = () => {
    const { user } = useAuthContext()

    const { isLoading, error, data } = useQuery(['viewUserLoanHistory', user.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?userId=${user.id}&_expand=book`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const loanedHistory = data.filter (item => item.returnedDate);

    return (
        <div className="ml-50">
        <h1 className="h4 fw-400 text-center mb-50">Loan History</h1>
            <div className="flex flex-column mb-30">
                {loanedHistory.map( book => <LoanHistoryItem book={book}/> )}
            </div>
    </div>
    )
}

export default LoanHistory;