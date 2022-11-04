import React from "react";
import { useParams } from "react-router-dom";
import CardSmall from '../../components/Cards/CardSmall';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useState } from "react";
import {  useMutation } from '@tanstack/react-query';

const EditBook = () => {
    const [author, setAuthor] = useState();
    const [bookTitle, setBookTitle] = useState();
    const [description, setDescription] = useState();
    let {bookId} = useParams();

    const editBookHandler = () => {
        mutation.mutate(
            {
                id: bookId,
                bookTitle: bookTitle,
                author: author,
                ageRestriction: "",
                description: description
            }
        )
    }

    const mutation = useMutation(editBook => {
        return axios.put('http://localhost:3001/books/'+ bookId, editBook)
      })


    const { isLoading, error, data } = useQuery(['editBookByBook'], () =>
    axios.get(`http://localhost:3001/books/${bookId}`).then(res =>
      res.data
    )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }

    const bookTitleChangeHandler = (event) => {
        setBookTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }


    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Edit Book</h1>
            <hr className="hr"/>
            <div className="flex align-center justify-center">
                <div className="flex flex-column">
                    <h1 className="h3 red text-center mb-0">Edit Form</h1>
                    <CardSmall>
                        <form>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Author</label>
                            <input className="input" type="text" placeholder={data.author} onChange={authorChangeHandler}/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Title</label>
                            <input className="input" type="text" placeholder={data.bookTitle} onChange={bookTitleChangeHandler}/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Description</label>
                            <textarea className="input textarea_desc" cols="50" rows="10" onChange={descriptionChangeHandler}>{data.description}</textarea></div>
                            <button type="submit" className="primary-button full-width mb-20" onClick={editBookHandler}>Confirm Changes</button>
                            <button type="cancel" className="secondary-button full-width">Cancel</button>
                        </form>
                    </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default EditBook;