// import React, {useContext} from 'react'
import Books from './Books';
// import bookContext from "../context/books/bookContext"

export const Home = (props) => {
    // const context = useContext(bookContext);
    // const {userDetails} = context;

    const {showAlert} = props
    return (
        <div> 
            {/* Hey {userDetails.name} */}
            <Books showAlert={showAlert} />
        </div>
    )
}

