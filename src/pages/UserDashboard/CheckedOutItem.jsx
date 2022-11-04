import React from "react";
import {  useMutation } from '@tanstack/react-query';
import axios from "axios";

const CheckedOutItem = (props) => {
    //getting todays date
    const date = new Date();
    let day = date.getDate().toString(); 
    let m = date.getMonth() + 1;
    let month = m.toString();
    let year = date.getFullYear().toString();

    //contacting the date above to match the date format in the database
    let currentDate = year.concat("-", month, "-", day);

    const returnBookHandler = () => {
        mutation.mutate(
            {
                bookId: props.book.bookId,
                userId: props.book.userId,
                checkedOut: props.book.checkedOut,
                dueDate: props.book.dueDate,
                returnedDate: currentDate,
                id: props.book.id
            })
    }

    const mutation = useMutation(returnBook => {
        return axios.put('http://localhost:3001/loanedBooks/'+ props.book.id, returnBook)
    })

    return(
        <tr className="t-row">
            <td className="t-data__book">{props.book.book.bookTitle}</td>
            <td className="t-data">{props.book.checkedOut}</td>
            <td className="t-data">{props.book.dueDate}</td>
            <td className="flex justify-center"><button className="table-button" onClick={returnBookHandler}>Return</button></td>
        </tr>
    )
}

export default CheckedOutItem;