import React from "react";
import './EditBook.css';
import CardSmall from '../../components/Cards/CardSmall';

const EditBook = () => {
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
                            <input className="input" type="text" placeholder="J.R.R Tolkien"/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Title</label>
                            <input className="input" type="text" placeholder="Lord of the Rings"/></div>
                            <div className="flex flex-column mb-20"><label className="label red fw-400">Description</label>
                            <textarea className="input textarea_desc" cols="50" rows="10" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi tellus, fermentum non felis nec, bibendum vehicula urna. Fusce eu tempor leo. Mauris quis felis vestibulum, varius massa vitae, rutrum risus. Phasellus sit amet est in erat facilisis tempor quis sit amet mauris. Donec viverra ex vitae ante rhoncus, non blandit dolor varius. "></textarea></div>
                            <button type="submit" className="primary-button__full-width mb-20">Confirm Changes</button>
                            <button type="cancel" className="secondary-button__full-width">Cancel</button>
                        </form>
                    </CardSmall>
                </div>
            </div>
        </div>
    )
}

export default EditBook;