import React, { useState } from "react";
import Fuse from "fuse.js";
import BookItem from "./BookItem";
import books from "./books.json";
import arrow from '../../assets/images/arrow.png';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const Catalogue = () => {
    const [data, setData] = useState(books);

    const searchData = (pattern) => {
        if (!pattern) {
            setData(books);
            return;
        }

        const fuse = new Fuse(data, {
            keys: ["bookTitle", "author"],
        });

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setData([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            setData(matches);
        }
    }

    return (
        <div className="container">
            <div className="flex align-center">
                <h1 className="h1 red fw-600 mb-0 mt-0">Our Catalogue</h1>
                <div className="last-item flex justify-center">
                    <input className="search-bar" placeholder="search..." onChange={(e) => searchData(e.target.value)}/>
                    <button className="search-button"><img src={arrow}/></button>
                </div>
            </div>
            <hr className="hr"/>
            <div className="flex wrap justify-center space-between mb-75">
                {data.map( book => <BookItem book={book}/> )}
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

export default Catalogue;