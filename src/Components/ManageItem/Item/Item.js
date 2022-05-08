import React from 'react';
import { Button } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";
import './Item.css'
const Item = (props) => {
    const { _id, name, Author } = props.book
    console.log(_id)
    const handleDelete = (id) => {
        const yes = window.confirm('so you want to delete this book?')
        if (yes) {
            fetch(`https://lit-garden-64287.herokuapp.com/inventory/${id}`, {
                method: 'DELETE',

            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log("success:", data)
                    }
                })
            console.log(id)
            window.location.reload()


        }
    }


    return (
        <>

            <div className="table">
                <p className="box-border d-flex justify-content-center">{name}</p>
                <p className="box-border d-flex justify-content-center">{Author}</p>
                <Button onClick={() => handleDelete(_id)} className="box-border"><FaRegTrashAlt /></Button>

            </div>
        </>

    );
};

export default Item;