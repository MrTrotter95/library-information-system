import React from "react";
import './AddBook.css';
import CardSmall from '../../components/Cards/CardSmall';

const AddBook = () => {
    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Add Book</h1>
            <hr className="hr"/>
            <div className="flex align-center justify-center">
                <div className="flex flex-column">
                    <h1 className="h3 red text-center mb-0">Book Form</h1>
                    <CardSmall>
                        <form>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Author</label>
                            <input className="input" type="text" placeholder="Enter the author.."/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Title</label>
                            <input className="input" type="text" placeholder="Enter the book title.."/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Description</label>
                            <textarea className="input textarea_desc" cols="50" rows="10" placeholder="Enter the book description.."></textarea></div>
                            <button type="submit" className="primary-button__full-width mb-20">Add Book</button>
                            <button type="cancel" className="secondary-button__full-width">Cancel</button>
                        </form>
                    </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default AddBook;