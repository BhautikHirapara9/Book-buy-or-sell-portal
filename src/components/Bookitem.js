import React, {useContext} from 'react'
import bookContext from "../context/books/bookContext"


const Bookitem = (props) => {
    const context = useContext(bookContext);
    const { deleteBook } = context;
    const { book, updateBook } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3"  style={{borderTop: '5px double black', borderBottom: '5px double black', borderRadius:'19px'}}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">Title : {book.name}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Author : {book.author}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Edition : {book.edition}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Publisher : {book.publisher}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Category : {book.category}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Price On Book : {book.priceonbook}</p>
                    </div> <br />
                    <div className="d-flex align-items-center">
                        <p className="card-text" style={{fontWeight:'bold'}}>Sell Price: {book.sellprice}</p>
                    </div>
                    
                    <br/>
                    <i style={{cursor:"pointer"}} className="far fa-trash-alt mx-2" onClick={()=>{deleteBook(book._id)}}></i>
                    <i style={{cursor:"pointer"}} className="far fa-edit mx-2" onClick={()=>{updateBook(book)}}></i>

                </div>
            </div>
        </div>
    )
}

export default Bookitem
