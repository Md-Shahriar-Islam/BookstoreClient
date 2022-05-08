import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCustom from '../hooks/useCustom';
import Item from './Item/Item';

const ManageItem = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const navigate = useNavigate()

    return (
        <div>

            <div className="table">
                <p className="box-border d-flex justify-content-center p-2"><strong>Name of the book</strong></p>
                <p className="box-border d-flex justify-content-center p-2"><strong>Author of the book</strong></p>
                <p className="box-border p-2"><strong>Remove Item</strong></p>

            </div>

            {
                books.map((book) => <Item key={book._id} book={book}></Item>)

            }
            <div className="d-flex justify-content-center">
                <Button onClick={() => navigate('/add')} className="px-5">Add Item</Button>
            </div>

        </div >
    );
};

export default ManageItem;