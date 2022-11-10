import { Link, useParams } from "react-router-dom";
import React, {useState} from "react";
import CardMedium from '../../components/Cards/CardMedium';
import bin from '../../assets/images/bin.png';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const AdminBookItem = (props) => {
    //State variables and setting methods
    const [description, setDescription] = useState("Description");
    const [showDescription, setShowDescription] = useState(false);

    //Querying the database to get the loaned books
    const { isLoading, error, data } = useQuery(['adminLoanedBooksByBook', props.book.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?bookId=${props.book.id}`).then(res =>
      res.data
    )
    )

    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (error) return 'An error has occurred: ' + error.message

    //OnClick function that allows the user to see or hide the book desscription
    const descriptionHandler = () => {
        if(showDescription == true) {
            setShowDescription(false);
        } else if(showDescription == false) {
            setShowDescription(true);
        }

    }

    //Filtering the query response object to see if the book has been returned or not
    //This will be used to change a button to say either "checked out" if the returned date is null
    const loanedBook = data.find( item => !item.returnedDate);

    //OnClick function to delete
    const deleteBookHandler = () => {
        return axios.delete('http://localhost:3001/books/'+ props.book.id)
    }

    return (
        <div className=" mt-50">
        <CardMedium>
            <div>
                <div className="flex align-center">
                    <h1 className="h5 fw-600 mb-20 mt-0">{props.book.bookTitle}</h1>
                    <div className="last-item"><button className="bin-button" onClick={deleteBookHandler}><img src={bin}/></button></div>
                </div>

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
                <div className="flex align-center">
                    {/*If an admin clicks edit book. They will be take to the edit book page for the specific book. */}
                    <Link to={`/EditBook/${props.book.id}`}>
                        <button className="primary-button small">Edit Book</button>
                    </Link>
                    <button className="ml-20 secondary-button small" onClick={descriptionHandler}>{description}</button>
                </div>
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

export default AdminBookItem;