import React from "react";
import { useState, useEffect } from "react";
import {  useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const RequestHoldItem = (props) => {
    //State variable and setting methods
    const [isAvailable, setIsAvailable] = useState(false);
    
    const queryClient = useQueryClient()
    const { user } = useAuthContext()

    //Reversing loaned books array per book to grab the latest instance of the loaned book.
    const upToDateLoanedBook = props.book.loanedBooks.slice(-1)[0];

    //Updates a button on the UI when a book is requested to be put on hold 
    useEffect(() => {
        if(upToDateLoanedBook.returnedDate) {
            setIsAvailable(true);
        } else {
            setIsAvailable(false);
        }

    },[upToDateLoanedBook.returnedDate]);

    //getting todays date
    const date = new Date();
    let day = date.getDate().toString();
    let m = date.getMonth() + 1;
    let month = m.toString();
    let year = date.getFullYear().toString();

    //contacting the date above to match the date format in the database
    let currentDate = year.concat("-", month, "-", day);

    //Calculating dueDate
    let dueDateM = date.getMonth() + 2;
    let dueDateMonth = dueDateM.toString();
    let dueDate = year.concat("-", dueDateMonth, "-", day);

    //OnSubmit function that packages up an object to place a book on hold
    const checkoutOnHoldBookHandler = () => {
        mutation.mutate(
            {
                bookId: props.book.id,
                userId: user.id, // Need to update this once user accounts are logged in
                checkedOut: currentDate,
                dueDate: dueDate,
                returnedDate: ""
            })
        
        updateOnHoldMutation.mutate(
            {
                onHold: 0
            }
        )
    }

    //Mutation that allows the user to checkout the book they had on hold
    const mutation = useMutation({
        mutationFn: checkBook => {
            return axios.post('http://localhost:3001/loanedBooks', checkBook)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['viewUserOnHoldBooks']})
            queryClient.invalidateQueries({ queryKey: ['viewUserLoanedBooks'] })
        },
    })

    //Mutation that patches/updates the database to remove the on hold notification
    const updateOnHoldMutation = useMutation({
        mutationFn: removeHold => {
            return axios.patch('http://localhost:3001/books/'+ props.book.id, removeHold)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] })
        }
    })

    return(
        <tr className="t-row">
            <td className="t-data__book">{props.book.bookTitle}</td>
            <td className="t-data">{props.book.author}</td>
            <td className="t-data">{upToDateLoanedBook.dueDate}</td>
            {isAvailable ? <td className="t-data">{upToDateLoanedBook.returnedDate}</td> : <td className="t-data">Not Returned</td>}
            {isAvailable ? <td className="t-data red">Yes</td> : <td className="t-data red">No</td>}
            {isAvailable ? <td className="flex justify-center"><button className="table-button" onClick={checkoutOnHoldBookHandler}>Checkout</button></td> : <td></td>}
        </tr>
    )
}

export default RequestHoldItem;