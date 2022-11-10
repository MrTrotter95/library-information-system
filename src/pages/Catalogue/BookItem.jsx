import React, {useState} from "react";
import CardMedium from '../../components/Cards/CardMedium';
import {  useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const BookItem = (props) => {
    //State variables and setting methods
    const [description, setDescription] = useState("Description");
    const [showDescription, setShowDescription] = useState(false);

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

    //Calculating dueDate
    let dueDateM = date.getMonth() + 2;
    let dueDateMonth = dueDateM.toString();
    let dueDate = year.concat("-", dueDateMonth, "-", day);

    //OnSubmit function that creates a check out book object using the state variables
    const checkoutBookHandler = () => {
        mutation.mutate(
            {
                bookId: props.book.id,
                userId: user.id,
                checkedOut: currentDate,
                dueDate: dueDate,
                returnedDate: ""
            })
    }

    //Mutation that posts the object above to the database
    const mutation = useMutation({
        mutationFn: checkBook => {
            return axios.post('http://localhost:3001/loanedBooks', checkBook)
        },
        onSuccess: () => {
            //Once post is a success, this method updates the view in the ui.
            queryClient.invalidateQueries({ queryKey: ['books'] })
            queryClient.invalidateQueries({ queryKey: ['loanedBooksByBook']})
        },
    })

    //onSubmit function that creataes a requestHold object using the book and user properties
    const requestHoldHandler = () => {
        mutateHold.mutate(
            {
                id: props.book.id,
                onHold: user.id,
                bookTitle: props.book.bookTitle,
                author: props.book.author,
                description: props.book.description
            }
        )
    }

    //Mutation the patches/updates the book places the users ID on the OnHold property
    //To allow the application know the book is on hold.
    const mutateHold = useMutation({
        mutationFn: requestHold => {
            return axios.patch('http://localhost:3001/books/'+ props.book.id, requestHold)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] })
            queryClient.invalidateQueries({ queryKey: ['loanedBooksByBook']})
        },
    })

    //Querying the database to get the loaned books
    const { isLoading, error, data } = useQuery(['loanedBooksByBook', props.book.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?bookId=${props.book.id}`).then(res =>
      res.data
    )
    )

    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (error) return 'An error has occurred: ' + error.message

    //Function to allow the user to see the description of the book.
    const descriptionHandler = () => {
        if(showDescription == true) {
            setShowDescription(false);
        } else if(showDescription == false) {
            setShowDescription(true);
        }
    }

    //Filtering data to find if book is returned or not
    const loanedBook = data.find( item => !item.returnedDate);

    //Checking if book is checked out, available or onhold and displaying the correct button
    let status;
    if(props.book.onHold) {
        status = <button className="primary-button small">On Hold</button>
    } else if(loanedBook) {
        status = <button className="primary-button small" onClick={requestHoldHandler}>Request Hold</button> 
    } else if(!loanedBook) {
        status = <button className="primary-button small" onClick={checkoutBookHandler}>Check Out</button>
    }

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
                    {status}
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