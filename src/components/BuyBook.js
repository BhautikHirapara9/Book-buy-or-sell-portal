import React from 'react'

const Bookitem = (props) => {
    const {book} = props;
    return (
        <div className="col-md-4">
            <div className="card my-4" style={{borderTop: '5px double black', borderBottom: '5px double black', borderRadius:'19px', backgroundColor:'rgba(256,256,256,0.4)'}}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-text">Title : {book.name}</h5>
                    </div> <br />
                    <div className="d-flex align-items-center">
                        <p className="card-text">Author: {book.author}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Edition: {book.edition}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Publisher: {book.publisher}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Category: {book.category}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text">Price On Book: {book.priceonbook}</p>
                    </div> <br />
                    <div className="d-flex align-items-center">
                        <p className="card-text" style={{background:'#3194e8', cursor:'pointer', color:'white', display:'block', margin:'auto', marginTop:"10px",padding:'6px', borderRadius:'5px'}}>Sell Price : {book.sellprice}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookitem
