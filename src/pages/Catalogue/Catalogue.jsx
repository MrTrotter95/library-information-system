import React, { useState } from "react";
import Fuse from "fuse.js";
import BookItem from "./BookItem";
import arrow from '../../assets/images/arrow.png';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useEffect } from "react";

const Catalogue = () => {
    const [books, setBooks] = useState([]);

    const { isLoading, error, data } = useQuery(['books'], () =>
    axios.get('http://localhost:3001/books').then(res =>
      { console.log(res);
        return res.data}
    )
    )

    useEffect(() => {
        if(data) {
            setBooks(data);
        }

    },[data]);

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    // Code for search bar
    const searchData = (pattern) => {
        if (!pattern) {
            setBooks(books);
            return;
        }

        const fuse = new Fuse(data, {
            keys: ["bookTitle", "author"],
        });

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setBooks([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            setBooks(matches);
        }
    }

    return (
        <div className="container">
            <div className="flex align-center">
                <h1 className="h1 red fw-600 mb-0 mt-0">Our Catalogue</h1>
                <div className="last-item flex justify-center">
                    <input className="search-bar" placeholder="search..." onChange={(e) => searchData(e.target.value)}/>
                </div>
            </div>
            <hr className="hr"/>
            <div className="flex wrap justify-center space-between mb-75">
                {books.map( book => <BookItem book={book}/> )}
            </div>
            <hr className="hr mb-250"/>
        </div>
    )
}

export default Catalogue;