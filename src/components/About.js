import React, { useContext, useEffect } from 'react'
import bookContext from "../context/books/bookContext"
import BuyBook from './BuyBook';

const About = (props) => {
    const context = useContext(bookContext);
    const { books, allthebook } = context;
    useEffect(() => {
            allthebook()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="row my-3">
                <h2></h2>
                <div className="container mx-2"> 
                {books.length===0 && 'No books to display'}
                </div>
                {books.map((book) => {
                    return <BuyBook key={book._id} book={book} />
                })}
            </div>
        </>
    )
}

export default About
