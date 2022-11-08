import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Link } from "react-router-dom";

const UserItem = (props) => {
    const { isLoading, error, data } = useQuery(['viewCountOfLoanedBooksByUser', props.user.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?userId=${props.user.id}`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message



    //getting todays date
    const date = new Date();
    let day = date.getDate().toString();
    let m = date.getMonth() + 1;
    let month = m.toString();
    let year = date.getFullYear().toString();

    //contacting the date above to match the date format in the database
    let currentDate = year.concat("-", month, "-", day);

    const loanedItem = data.filter( item => !item.returnedDate);
    const overdueItems = loanedItem.filter (item => new Date(item.dueDate) <  new Date(currentDate));

    return (
        <tr className="t-row">
            <td className="t-data">{props.user.id}</td>
            <td className="t-data__book">{props.user.lastName}, {props.user.firstName}</td>
            <td className="t-data">{loanedItem.length}</td>
            <td className="t-data red">{overdueItems.length}</td>
            <td className="flex justify-center">
                <Link to={`/EditProfile/${props.user.id}`}>
                    <button className="table-button">Edit User</button>
                </Link>
            </td>
        </tr>
    )
}

export default UserItem;