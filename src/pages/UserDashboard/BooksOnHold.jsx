import React, { useState } from "react";
import CardLarge from "../../components/Cards/CardLarge";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import RequestHoldItem from './RequestHoldItem';

const BooksOnHold = () => {
    const [onHoldBooks, setOnHoldBooks] = useState(false);
    const [onHoldBtn, setOnHoldBtn] = useState('View Books');

    const { user } = useAuthContext()

    const { isLoading, error, data } = useQuery(['viewUserOnHoldBooks', user.id], () =>
    axios.get(`http://localhost:3001/books?onHold=${user.id}&_embed=loanedBooks`).then(res =>
      res.data
    ))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const viewOnHoldHandler = () => {
        if(onHoldBooks == true) {
            setOnHoldBooks(false);
            setOnHoldBtn('View Books');
        } else if(onHoldBooks == false) {
            setOnHoldBooks(true);
            setOnHoldBtn('Hide');
        }
    }

    return (
        <div>
            <CardLarge>
                <div className="flex">
                    <div className="flex align-center">
                        <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">{data.length}</h1>
                        <p className="h4 mt-0 mb-0">Books On Hold</p>
                    </div>
                    <div className=" flex last-item align-center">
                        <button className="primary-button large" onClick={viewOnHoldHandler}>{onHoldBtn}</button>
                    </div>
                </div>
                {onHoldBooks && 
                <table className="table">
                    <thead className="t-head">
                        <tr>
                            <th>Book Title</th>
                            <th>Author</th>
                            <th>Due Date</th>
                            <th>Returned Date</th>
                            <th>Available?</th>
                            <th>Checkout</th>
                        </tr>
                    </thead>
                    <tbody className="t-body">
                        {data.map( book => <RequestHoldItem book={book}/> )}
                    </tbody>
                </table>
                }
            </CardLarge>
        </div>
    )
}

export default BooksOnHold;