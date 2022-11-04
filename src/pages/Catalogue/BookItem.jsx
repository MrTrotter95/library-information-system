import React, {useState} from "react";
import CardMedium from '../../components/Cards/CardMedium';
import { useQuery } from '@tanstack/react-query';
import {  useMutation } from '@tanstack/react-query';
import axios from "axios";

const BookItem = (props) => {
    const [description, setDescription] = useState("Description");
    const [showDescription, setShowDescription] = useState(false);

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

    //Allowing a user the checkout a book
    const checkoutBookHandler = () => {
        mutation.mutate(
            {
                bookId: props.book.id,
                userId: 3, // Need to update this once user accounts are logged in
                checkedOut: currentDate,
                dueDate: dueDate,
                returnedDate: ""
            })
    }

    const mutation = useMutation(checkBook => {
        return axios.post('http://localhost:3001/loanedBooks', checkBook)
    })

    const { isLoading, error, data } = useQuery(['loanedBooksByBook', props.book.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?bookId=${props.book.id}`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    //Function to allow the user to see the description of the book.
    const descriptionHandler = () => {
        if(showDescription == true) {
            setShowDescription(false);
        } else if(showDescription == false) {
            setShowDescription(true);
        }
    }

    const loanedBook = data.find( item => !item.returnedDate);

    return (
        <div className=" mt-50">
        <CardMedium>
            <div>
                <h1 className="h5 fw-600 mb-20 mt-0">{props.book.bookTitle}</h1>
                <div className="flex align-center mb-20">
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Author:</p>
                    <p className="p1 mt-0 mb-0 ">{props.book.author}</p>
                </div>
                <div className="flex align-center mb-20">
                    <p className="p1 mt-0 mb-0 fw-600 red mr-10">Status:</p>
                    <p className="p1 mt-0 mb-0 mr-30">{loanedBook ? 'Checked out' : 'Available'}</p>
                    {loanedBook && <><p className="p1 mt-0 mb-0 fw-600 red mr-10">Available on:</p>
                    <p className="p1 mt-0 mb-0 ">{loanedBook.dueDate}</p></>}
                </div>
                {mutation.isLoading ? ('checking out book...') : (
                <div className="flex align-center">
                    {loanedBook ? <button className="primary-button small">Request Hold</button> : <button className="primary-button small" onClick={checkoutBookHandler}>Check Out</button>}
                    <button className="ml-20 secondary-button small" onClick={descriptionHandler}>{description}</button>
                </div>
                )}
                {showDescription && 
                    <div>
                        <p className="p1 mt-30 mb-0 fw-600 red mr-10">Description</p>
                        <p className="p2 mt-0 mb-0">{props.book.description}</p>
                    </div>
                }
            </div>
        </CardMedium>
        </div>
    )
}

export default BookItem;