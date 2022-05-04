import React, { useEffect, useState } from 'react';
import CardCopy from '../Card/CardCopy';
import "./CardHolder.css"

const CardHolder = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)
    return (
        <div className="CardHolder">
            {
                books.map(book => <CardCopy key={book._id} book={book}></CardCopy>)
            }

        </div>
    );
};

export default CardHolder;