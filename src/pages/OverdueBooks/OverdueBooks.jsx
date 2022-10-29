import React from "react";
import CardLarge from '../../components/Cards/CardLarge';

const OverdueBooks = () => {
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
                                <th>Date Checked Out</th>
                                <th>Due Date</th>
                                <th>Overdue By</th>
                                <th>Contact User</th>
                            </tr>
                        </thead>
                        <tbody className="t-body">
                            <tr className="t-row">
                                <td className="t-data__book">Lord of the rings</td>
                                <td className="t-data">18/09/22</td>
                                <td className="t-data">18/10/22</td>
                                <td className="t-data">2 days</td>
                                <td className="flex justify-center"><button className="table-button">Contact</button></td>
                            </tr>
                        </tbody>
                    </table>
                </CardLarge>
            </div>
        </div>
    )
}

export default OverdueBooks;