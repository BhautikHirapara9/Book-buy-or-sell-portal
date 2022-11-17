import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Navbar = () => {  

    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src="./fav_icon.jpg" style={{width:"50px", }} alt="" />
                <h1 className="navbar-brand mx-3">BookBecho</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {localStorage.getItem('token') ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        
                        <Link className={`nav-link ${location.pathname==="/buybook"? "active": ""}`} to="/buybook"> <i class="fa-solid fa-book"></i> Buy Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/sellbook"? "active": ""}`} aria-current="page" to="/sellbook"> <i class="fa-solid fa-book-bookmark"></i> Sell Book</Link>
                        </li>
                    </ul> : ""}
                    {!localStorage.getItem('token')?<form className="d-flex" style={{position:"absolute", right:"15px"}}> 
                    <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
                    </form>: <button onClick={handleLogout} className="btn btn-primary">Log out</button> }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
