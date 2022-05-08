import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useCustom from '../hooks/useCustom';
import "./Inventory.css"

const Inventory = () => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()


    const [book, setBook] = useState({})
    const [books, setBooks] = useCustom()
    const url = `https://lit-garden-64287.herokuapp.com/inventory/${params.invetoryId}`
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [book.quantity])

    const { _id, name, Author, Genere, Price, description, supplier, image } = book
    let { quantity } = book
    const handleamount = (event) => {
        let amount = event.target.amount.value
        amount = parseInt(amount)
        console.log(amount)
        quantity += amount
        let updateQunatity = { quantity }
        console.log(quantity)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQunatity),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    }

    const handleDeliver = () => {

        quantity = quantity - 1
        console.log(quantity)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        window.location.reload()
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

                <Button onClick={() => navigate("/manage")} className="mb-2" >Manage</Button>
                <button className="mx-2 btn btn-primary mb-2" onClick={handleDeliver}>Deliver</button>
                <form onSubmit={handleamount}>
                    <input type="number" name="amount" id="" /><input type="submit" className="mx-2" value="add" />
                </form>


            </div>




        </div>



    );
};

export default Inventory;