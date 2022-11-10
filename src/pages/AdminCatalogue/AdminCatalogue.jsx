import React from "react";
import AdminBookItem from "./AdminBookItem";
import arrow from '../../assets/images/arrow.png';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const AdminCatalogue = () => {
    //Querying the database to get all books
    const { isLoading, error, data } = useQuery(['adminViewBooks'], () =>
    axios.get('http://localhost:3001/books').then(res =>
      res.data
    )
    )

    //While query is retreiving information user with see Loading text.
    if (isLoading) return 'Loading...'

    //If Query is error user will see the appropriate error message.
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="container">
            <div className="flex align-center">
                <h1 className="h1 red fw-600 mb-0 mt-0">Our Catalogue</h1>
                <div className="last-item flex justify-center">
                    <input className="search-bar" placeholder="search..."/>
                    <button className="search-button"><img src={arrow}/></button>
                </div>
            </div>
            <hr className="hr"/>
            <div className="flex wrap justify-center space-between mb-75">
                {/*This method will map all the books into the AdminBookItem component.
                We are passing the properties into the component to display the properties. */}
                {data.map( book => <AdminBookItem book={book}/> )}
            </div>
            <hr className="hr mb-250"/>
        </div>
    )
}

export default AdminCatalogue;