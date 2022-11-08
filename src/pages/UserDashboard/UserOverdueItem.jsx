import React from "react";
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const UserOverdueItem = (props) => {
    const queryClient = useQueryClient()
    const { user } = useAuthContext()

    //getting todays date
    const date = new Date();
    let day = date.getDate().toString();
    let m = date.getMonth() + 1;
    let month = m.toString();
    let year = date.getFullYear().toString();

    //contacting the date above to match the date format in the database
    let currentDate = year.concat("-", month, "-", day);
    
    let currDate = new Date(currentDate);
    let dueDate = new Date(props.book.dueDate);

    //Checking how many days the book is overdue
    const daysOverdue = parseInt((currDate - dueDate) / (1000 * 60 * 60 * 24))

    const returnOverdueBookHandler = () => {
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

    const mutation = useMutation({
        mutationFn: returnBook => {
        return axios.put('http://localhost:3001/loanedBooks/'+ props.book.id, returnBook)
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['viewUserLoanedBooks', user.id] })
    }
    })

    return(
        <tr className="t-row">
            <td className="t-data__book">{props.book.book.bookTitle}</td>
            <td className="t-data">{props.book.checkedOut}</td>
            <td className="t-data">{props.book.dueDate}</td>
            <td className="t-data"><span className="red fw-600">{daysOverdue}</span> days</td>
            <td className="flex justify-center"><button className="table-button" onClick={returnOverdueBookHandler}>Return</button></td>
        </tr>
    )
}

export default UserOverdueItem;