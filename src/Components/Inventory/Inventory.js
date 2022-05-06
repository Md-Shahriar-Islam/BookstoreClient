import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import "./Inventory.css"

const Inventory = () => {
    const params = useParams()
    const navigate = useNavigate()
    console.log(params)

    const [book, setBook] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${params.invetoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [book])
    const { _id, name, Author, Genere, Price, description, supplier, image } = book
    let { quantity } = book

    const handleDeliver = () => {
        quantity = quantity - 1
        console.log(quantity)
        // fetch('https://example.com/profile', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ quantity }),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    return (

        <div className="layout">
            <div>
                <img src={image}></img>
            </div>
            <div>
                <h5>{name}</h5>
                <p> Author:{Author}</p>
                <p> Genere:{Genere}</p>
                <p> Price:{Price}</p>
                <p >description:{description}</p>
                <p> supplier:{supplier}</p>
                <p> quantity:{quantity}</p>

                <Button onClick={() => navigate("/manage")} >Manage</Button>
                <Button className="mx-2 " onClick={handleDeliver}>Deliver</Button>

            </div>




        </div>



    );
};

export default Inventory;