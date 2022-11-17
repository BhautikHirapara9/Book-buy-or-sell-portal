import BookContext from "./bookContext";
import { useState } from "react";

const BookState = (props) => {
  const host = "http://localhost:5000"
  const booksInitial = []
  const [books, setBooks] = useState(booksInitial)

  // Get all Books
  const getBooks = async () => {
    // API Call 
    const response = await fetch(`${host}/api/books/fetchallbooks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token'),
      }
    });
    const json = await response.json() 
    setBooks(json)
  }

  const allthebook = async () => {
    // API Call 
    const response = await fetch(`${host}/api/books/allthebook`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token'),
      }
    });
    const json = await response.json() 
    setBooks(json)
  }

  // Add a Book
  const addBook = async (name, author, edition, publisher, category, priceonbook, sellprice) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/books/addbook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({name, author, edition, publisher, category, priceonbook, sellprice})
    });

    const book = await response.json();
    setBooks(books.concat(book))
  }

  // Delete a Book
  const deleteBook = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/books/deletebook/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    console.log(json)
    const newBooks = books.filter((book) => { return book._id !== id })
    setBooks(newBooks)
  }

  // Edit a Book
  const editBook = async (id, name, author, edition, publisher, category, priceonbook, sellprice) => {
    // API Call 
    const response = await fetch(`${host}/api/books/updatebook/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({name, author, edition, publisher, category, priceonbook, sellprice})
    });
    const json = await response.json(); 
    console.log(json)
     let newBooks = JSON.parse(JSON.stringify(books))
    // Logic to edit in client
    for (let index = 0; index < newBooks.length; index++) {
      const element = newBooks[index];
      if (element._id === id) {
        newBooks[index].name = name;
        newBooks[index].author = author;
        newBooks[index].edition = edition; 
        newBooks[index].publisher = publisher; 
        newBooks[index].category = category; 
        newBooks[index].priceonbook = priceonbook; 
        newBooks[index].sellprice = sellprice; 
        break; 
      }
    }  
    setBooks(newBooks);
  }

  const userDetails = async (name) => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name})
    });
    const json = await response.json(); 
    console.log(json)
  }

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, editBook, getBooks, userDetails, allthebook }}>
      {props.children}
    </BookContext.Provider>
  )

}
export default BookState;