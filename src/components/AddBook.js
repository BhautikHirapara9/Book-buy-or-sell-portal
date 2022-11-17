import React, {useContext, useState} from 'react'
import bookContext from "../context/books/bookContext"

const AddBook = () => {
    const context = useContext(bookContext);
    const {addBook} = context;

    const [book, setBook] = useState({name:"", publisher:"", author:"", edition:"", category:"", sellprice:'', priceonbook:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addBook(book.name, book.author,  book.edition, book.publisher , book.category, book.priceonbook, book.sellprice);
        setBook({name:"", publisher:"", author:"", edition:"", category:"", sellprice:'', priceonbook:""})
    }

    const onChange = (e)=>{
        setBook({...book, [e.target.name]: e.target.value})
    }

    const previewFile = () =>  {
        var preview = document.querySelector('#BImage');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
    
        reader.onloadend = function () {
            preview.src = reader.result;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    return (
        <div className="container my-3">
            <h2>Sell Book</h2>
            <form className="my-3">
            <div className="container" style={{'border': '1px solid black', 'width': '62%', 'height': '305px', 'margin': 'auto', 'marginTop':'20px', 'borderRadius': '10px', 'backgroundColor': 'aliceblue', 'display': 'flex', 'flexDirection': 'row'}}>
            <div className="book-img" style={{'width': '280px', 'margin': '10px', 'height': '90%', 'backgroundColor': '#c3d8eb', 'borderRadius': '5px'}} >
                <img id='BImage' src=""  alt="Preview Image..." style={{'borderRadius': '5px', 'width':'280px', 'height': '100%'}} />
            </div>
                <div className="book-desc" style={{'width': '444px', 'margin': '10px', 'height': '90%','backgroundColor':'#c3d8eb', 'borderRadius': '5px'}}>
                    <input type="file" accept="image/*" onChange={previewFile}/>
                    <input className="input" type="text" id='name' name='name' style={{'margin': '5px', 'padding': '5px','borderRadius': '4px', 'color': 'black'}} onChange={onChange} placeholder="Book Name" />
                    <input className="input" type="text"  id='author' name='author' style={{'margin': '5px', 'padding': '5px','borderRadius': '4px', 'color': 'black'}} onChange={onChange} placeholder="Name of author" />
                    <input className="input" type="text" id='publisher' name='publisher' style={{'margin': '5px', 'padding': '5px','borderRadius': '4px', 'color': 'black'}} onChange={onChange} placeholder="Name of Publisher" />
                    <input className="input" type="text"  id='edition' name='edition' style={{'margin': '5px', 'padding': '5px','borderRadius': '4px', 'color': 'black'}} onChange={onChange} placeholder="Edition" />
                    <input className="input" type="text" id='category' name='category' style={{'margin': '5px', 'padding': '5px','borderRadius': '4px', 'color': 'black'}} onChange={onChange} placeholder="Category" />
                    <input className="input" type="number" id='priceonbook' name='priceonbook' style={{'margin': '5px', 'padding': '5px','borderRadius': '4px', 'color': 'black'}} onChange={onChange} placeholder="Price on Book" />
                    <input className="input" type="number" id='sellbook' name='sellprice' style={{'margin': '5px', 'padding': '5px','borderRadius': '4px', 'color': 'black'}} onChange={onChange} placeholder="Sell Price" />
                    
                    <center><button className="btn" style={{'margin': '6px','padding': '6px','background':'rgb(66, 196, 235)', 'cursor': 'pointer','borderRadius': '5px'}} onChange={onChange} onClick={handleClick} >Sell Book</button></center>
            </div>
            </div>
            </form>
        </div>
    )
}

export default AddBook
