import React, {useState} from "react";
import CardSmall from '../../components/Cards/CardSmall';
import AddBookSuccess from "./AddBookSuccess";
import {  useMutation } from '@tanstack/react-query';
import axios from "axios";

const AddBook = () => {
    //State variables and setting methods
    const [author, setAuthor] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    //Onchange functions attached to input fields that save users input to the state varaibles above
    const authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    //OnSubmit function that creates a book object using the state variables
    const addBookHandler = () => {
        mutation.mutate(
            {
                bookTitle: title, 
                author: author,  
                description: description 
            })
    }

    //Mutation that posts the object above to the database.
    const mutation = useMutation(newBook => {
        return axios.post('http://localhost:3001/books', newBook)
      })

    return (
        <>
        {/*If posting is success user will see the AddBook Success Prompt. */}
        {mutation.isSuccess ? <AddBookSuccess/> :
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Add Book</h1>
            <hr className="hr"/>
            <div className="flex align-center justify-center">
                <div className="flex flex-column">
                    <h1 className="h3 red text-center mb-0">Book Form</h1>
                    <CardSmall>
                        {mutation.isLoading ? ('Adding Book....' ) : (
                        <form>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Author</label>
                            <input className="input" type="text" placeholder="Enter the author.." onChange={authorChangeHandler}/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Title</label>
                            <input className="input" type="text" placeholder="Enter the book title.." onChange={titleChangeHandler}/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Description</label>
                            <textarea className="input textarea_desc" cols="50" rows="10" placeholder="Enter the book description.." onChange={descriptionChangeHandler}></textarea></div>
                            <button type="submit" className="primary-button full-width mb-20" onClick={addBookHandler}>Add Book</button>
                            <button type="cancel" className="secondary-button full-width">Cancel</button>
                        </form>
                        )}
                    </CardSmall>
                </div>
            </div>
        </div>
         }
        </>
    )
}

export default AddBook;