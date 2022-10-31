import React, {useState} from "react";
import userImage from '../../assets/images/userImage.png';
import CardLarge from '../../components/Cards/CardLarge';
import OverdueItem from "./OverdueItem";
import CheckedOutItem from './CheckedOutItem';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const UserDashboard = () => {
    const [checkedOut, setCheckedOut] = useState(false);
    const [checkedOutBtn, setCheckedOutBtn] = useState('View Books');

    const [overdueBooks, setOverDueBooks] = useState(false);
    const [overdueBookBtn, setoverdueBookBtn] = useState('View Books');

    const { isLoading, error, data } = useQuery(['viewUserLoanedBooks'], () =>
    axios.get('http://localhost:3001/loanedBooks?_expand=user&_expand=book').then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const viewCheckedBooksHandler = () => {
        if(checkedOut == true) {
            setCheckedOut(false);
            setCheckedOutBtn('View Books');
        } else if(checkedOut == false) {
            setCheckedOut(true);
            setCheckedOutBtn('Hide');
        }
    }


    const viewOverdueHandler = () => {
        if(overdueBooks == true) {
            setOverDueBooks(false);
            setoverdueBookBtn('View Books');
        } else if(overdueBooks == false) {
            setOverDueBooks(true);
            setoverdueBookBtn('Hide');
        }
    }


    return (
        <div className="container">
            <h1 className="h1 red fw-600 mb-0">Dashboard</h1>
            <hr className="hr"/>
            <div>
                <div className="flex flex-row mt-50 mb-40">
                    <div>
                        <img src={userImage}/>
                    </div>
                    <div className="ml-40">
                        <h1 className="h2 red fw-600 mt-0 mb-0">Welcome back "First Name"!</h1>
                        <p className="h4 fw-400 mt-0">What would you like to do today?</p>
                    </div>
                </div>
                
                <div className="mb-40">
                    <CardLarge>
                        <div className="flex">
                            <div className="flex align-center">
                                <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">6</h1>
                                <p className="h4 mt-0 mb-0">Books currently checked out.</p>
                            </div>
                            <div className=" flex last-item align-center">
                                <button className="primary-button large" onClick={viewCheckedBooksHandler}>{checkedOutBtn}</button>
                            </div>
                        </div>
                        {checkedOut && 
                        <table className="table">
                            <thead className="t-head">
                                <tr>
                                    <th>Book Title</th>
                                    <th>Date Checked Out</th>
                                    <th>Due Date</th>
                                    <th>Overdue By</th>
                                    <th>Return Book</th>
                                </tr>
                            </thead>
                            <tbody className="t-body">
                                {data.map( book => <CheckedOutItem book={book}/> )}
                            </tbody>
                        </table>
                        }
                    </CardLarge>
                </div>

                <div>
                    <CardLarge>
                        <div className="flex">
                            <div className="flex align-center">
                                <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">2</h1>
                                <p className="h4 mt-0 mb-0">Books currently overdue.</p>
                            </div>
                            <div className=" flex last-item align-center">
                                <button className="primary-button large" onClick={viewOverdueHandler}>{overdueBookBtn}</button>
                            </div>
                        </div>
                        {overdueBooks && 
                        <table className="table">
                            <thead className="t-head">
                                <tr>
                                    <th>Book Title</th>
                                    <th>Date Checked Out</th>
                                    <th>Due Date</th>
                                    <th>Overdue By</th>
                                    <th>Return Book</th>
                                </tr>
                            </thead>
                            <tbody className="t-body">
                                <OverdueItem/>
                            </tbody>
                        </table>
                        }
                    </CardLarge>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;