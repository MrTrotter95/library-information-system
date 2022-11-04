import { Link, useParams } from "react-router-dom";
import React, {useState} from "react";
import CardMedium from '../../components/Cards/CardMedium';
import bin from '../../assets/images/bin.png';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const AdminBookItem = (props) => {
    const [description, setDescription] = useState("Description");
    const [showDescription, setShowDescription] = useState(false);



    const { isLoading, error, data } = useQuery(['adminLoanedBooksByBook', props.book.id], () =>
    axios.get(`http://localhost:3001/loanedBooks?bookId=${props.book.id}`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const descriptionHandler = () => {
        if(showDescription == true) {
            setShowDescription(false);
        } else if(showDescription == false) {
            setShowDescription(true);
        }

    }

    const loanedBook = data.find( item => !item.returnedDate);

    //Deleting a book by it's ID
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