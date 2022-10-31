import React from "react";
import CardLarge from '../../components/Cards/CardLarge';
import OverdueItem from "./OverdueItem";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const OverdueBooks = () => {
    const { isLoading, error, data } = useQuery(['viewOverdueBooks'], () =>
    axios.get('http://localhost:3001/loanedBooks?_expand=user&_expand=book').then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="container">
            <h1 className="h1 red fw-600 mb-0">Overdue Books</h1>
            <hr className="hr mb-75"/>
            <div>
                <CardLarge>
                    <div className="flex mb-75">
                        <div className="flex align-center">
                            <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">2</h1>
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