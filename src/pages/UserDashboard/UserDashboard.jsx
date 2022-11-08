import React, {useState} from "react";
import userImage from '../../assets/images/userImage.png';
import CardLarge from '../../components/Cards/CardLarge';
import BooksOnHold from "./BooksOnHold";
import UserOverdueItem from "./UserOverdueItem";
import CheckedOutItem from './CheckedOutItem';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const UserDashboard = () => {
    const [checkedOut, setCheckedOut] = useState(false);
    const [checkedOutBtn, setCheckedOutBtn] = useState('View Books');

    const [overdueBooks, setOverDueBooks] = useState(false);
    const [overdueBookBtn, setoverdueBookBtn] = useState('View Books');



    const { user } = useAuthContext()

    const { isLoading, error, data } = useQuery(['viewUserLoanedBooks', user.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?userId=${user.id}&_expand=user&_expand=book`).then(res =>
      res.data
    ))

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



    // To display currently checked out books for the specific user
    const userCheckedOutItem = data.filter( item => !item.returnedDate);

    
    //To display currently overdue books for the specific user
    //getting todays date
    const date = new Date();
    let day = date.getDate().toString();
    let m = date.getMonth() + 1;
    let month = m.toString();
    let year = date.getFullYear().toString();

    //contacting the date above to match the date format in the database
    let currentDate = year.concat("-", month, "-", day);
    const overdueItems = userCheckedOutItem.filter (item => new Date(item.dueDate) <  new Date(currentDate));

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
                        <h1 className="h2 red fw-600 mt-0 mb-0">Welcome back {user.firstName}!</h1>
                        <p className="h4 fw-400 mt-0">What would you like to do today?</p>
                    </div>
                </div>
                
                <div className="mb-40">
                    <CardLarge>
                        <div className="flex">
                            <div className="flex align-center">
                                <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">{userCheckedOutItem.length}</h1>
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
                                    <th>Return Book</th>
                                </tr>
                            </thead>
                            <tbody className="t-body">
                                {userCheckedOutItem.map( book => <CheckedOutItem book={book}/> )}
                            </tbody>
                        </table>
                        }
                    </CardLarge>
                </div>

                <div className="mb-40">
                    <CardLarge>
                        <div className="flex">
                            <div className="flex align-center">
                                <h1 className="h3 red fw-600 mt-0 mb-0 mr-20">{overdueItems.length}</h1>
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
                                {overdueItems.map( book => <UserOverdueItem book={book}/> )}
                            </tbody>
                        </table>
                        }
                    </CardLarge>
                </div>
                <BooksOnHold/>
            </div>
        </div>
    )
}

export default UserDashboard;