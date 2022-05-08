import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyCard = (props) => {
    const { _id, image, name, Author, Genre, Price, quantity } = props.book
    const handleDelete = (id) => {
        const yes = window.confirm('so you want to delete this book?')
        if (yes) {
            fetch(`http://localhost:5000/mybook/${id}`, {
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
            console.log(id)


        }
    }
    return (
        <div>
            <Card className="border-0 card" style={{ width: '18rem' }}>
                <Card.Img className="image" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                        Author:{Author}<br></br>
                        Genre:{Genre}<br></br>
                        Quantity:{quantity}<br></br>
                        price:{Price}<br></br>
                    </Card.Text>

                    <Button onClick={() => handleDelete(_id)} variant="primary">Delete</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default MyCard;