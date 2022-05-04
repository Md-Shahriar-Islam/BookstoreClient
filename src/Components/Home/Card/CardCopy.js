import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./CardCopy.css"

const CardCopy = (props) => {
    const { _id, image, name, Author, Genre, Price, quantity } = props.book
    const navigate = useNavigate()
    return (
        <div>
            <Card className="border-0 card" style={{ width: '18rem' }}>
                <Card.Img className="image" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <ul className="list">
                            <li>Author:{Author}</li>
                            <li>Genre:{Genre}</li>
                            <li>Quantity:{quantity}</li>
                            <li>price:{Price}</li>
                        </ul>
                    </Card.Text>
                    <Button onClick={() => navigate(`/inventory/${_id}`)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardCopy;