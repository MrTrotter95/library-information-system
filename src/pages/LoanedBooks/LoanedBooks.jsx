import React from "react";
import CardLarge from '../../components/Cards/CardLarge';

const LoanedBooks = () => {
    return (
        <div className="container">
            <h1 className="h1 red fw-600 mb-0">Loaned Books</h1>
            <hr className="hr mb-75"/>
            <div>
                <CardLarge>
                    <div className="flex mb-75">
                        <div className="flex align-center">
                            <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">2</h1>
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
                            <tr className="t-row">
                                <td className="t-data__book">Lord of the rings</td>
                                <td className="t-data">Smith, John</td>
                                <td className="t-data">18/10/22</td>
                                <td className="t-data">18/09/22</td>
                            </tr>
                            <tr className="t-row">
                                <td className="t-data__book">Lord of the rings</td>
                                <td className="t-data">Smith, John</td>
                                <td className="t-data">18/10/22</td>
                                <td className="t-data">18/09/22</td>
                            </tr>
                        </tbody>
                    </table>
                </CardLarge>
            </div>
        </div>
    )
}

export default LoanedBooks;