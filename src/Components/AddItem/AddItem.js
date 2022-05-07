import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {

    const handleAddItem = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const name = event.target.name.value
        const Genere = event.target.Genere.value
        const Author = event.target.Author.value
        const image = event.target.image.value
        const description = event.target.description.value
        const quantity = event.target.quantity.value
        const price = event.target.price.value
        const newBook = { email, name, Genere, Author, image, description, quantity, price }
        fetch('http://localhost:5000/mybook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })


    }


    return (
        <div className="w-50 mx-auto mt-5">
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="Author" placeholder="Author name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="Genere" placeholder="Genere" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="description" placeholder="description" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="image" placeholder="image" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" name="price" placeholder="price" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" name="quantity" placeholder="quantity" />
                </Form.Group>




                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                        Add Item
                    </Button>
                </div>
            </Form>


        </div>





    );
};

export default AddItem;