import React, { useContext, useEffect, useRef, useState } from 'react'
import bookContext from "../context/books/bookContext"
import Bookitem from './Bookitem';
import AddBook from './AddBook';
import { useHistory } from 'react-router-dom';

const Books = (props) => {
    const context = useContext(bookContext);
    const { books, getBooks, editBook } = context;
    let history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('token'))
        {
            getBooks()
        }
        else{
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [book, setBook] = useState({id: "", ename:"", epublisher:"", eauthor:"", eedition:"", ecategory:"", esellprice:'', epriceonbook:""})

    const updateBook = (currentBook) => {
        ref.current.click();
        setBook({id: currentBook._id, ename: currentBook.name, epublisher: currentBook.publisher, eauthor: currentBook.author, eedition: currentBook.edition, ecategory: currentBook.category, esellprice: currentBook.sellprice, epriceonbook: currentBook.priceonbook})
    }

    const handleClick = (e)=>{ 
        editBook(book.id, book.ename, book.epublisher, book.eauthor, book.eedition, book.ecategory, book.esellprice, book.epriceonbook)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setBook({...book, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddBook />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Book</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">name</label>
                                    <input type="text" className="form-control" id="ename" name="ename" value={book.ename} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">author</label>
                                    <input type="text" className="form-control" id="eauthor" name="eauthor" value={book.eauthor} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edition" className="form-label">edition</label>
                                    <input type="text" className="form-control" id="eedition" name="eedition" value={book.eedition} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="publisher" className="form-label">publisher</label>
                                    <input type="text" className="form-control" id="epublisher" name="epublisher" value={book.epublisher} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">category</label>
                                    <input type="text" className="form-control" id="ecategory" name="ecategory" value={book.ecategory} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="priceonbook" className="form-label">Price On Book</label>
                                    <input type="text" className="form-control" id="epriceonbook" name="epriceonbook" value={book.epriceonbook} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sellprice" className="form-label">Sell Price</label>
                                    <input type="text" className="form-control" id="esellprice" name="esellprice" value={book.esellprice} onChange={onChange} minLength={5} required/>
                                </div> 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Book</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Books</h2>
                <div className="container mx-2"> 
                {books.length===0 && 'No Books'}
                </div>
                {books.map((book) => {
                    return <Bookitem key={book._id} updateBook={updateBook} book={book} />
                })}
            </div>
        </>
    )
}

export default Books
