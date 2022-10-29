import React from "react";
import AdminBookItem from "./AdminBookItem";
import arrow from '../../assets/images/arrow.png';

const AdminCatalogue = () => {
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
                <AdminBookItem/>
                <AdminBookItem/>
                <AdminBookItem/>
                <AdminBookItem/>
            </div>

            <div className="flex justify-center align-center mb-50">
                <button className="pagination-button__prev">Previous</button>
                <button className="pagination-button">1</button>
                <button className="pagination-button">2</button>
                <button className="pagination-button">3</button>
                <button className="pagination-button__next">Next</button>
            </div>

            <hr className="hr mb-250"/>
        </div>
    )
}

export default AdminCatalogue;