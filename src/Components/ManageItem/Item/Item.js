import React from 'react';
import { Button } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";
import './Item.css'
const Item = (props) => {
    const { name, Author } = props.book
    return (
        <>

            <div className="table">
                <p className="box-border d-flex justify-content-center">{name}</p>
                <p className="box-border d-flex justify-content-center">{Author}</p>
                <Button className="box-border"><FaRegTrashAlt /></Button>

            </div>
        </>

    );
};

export default Item;