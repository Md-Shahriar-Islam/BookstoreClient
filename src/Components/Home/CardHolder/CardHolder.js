import React, { useEffect, useState } from 'react';
import useCustom from '../../hooks/useCustom';
import CardCopy from '../Card/CardCopy';
import "./CardHolder.css"

const CardHolder = () => {
    const [books, setBooks] = useCustom("http://localhost:5000/inventory")


    return (
        <div className="CardHolder">
            {
                books.slice(0, 6).map(book => <CardCopy key={book._id} book={book}></CardCopy>)
            }

        </div>
    );
};

export default CardHolder;