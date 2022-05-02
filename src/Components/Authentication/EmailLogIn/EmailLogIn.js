import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const EmailLogIn = () => {
    let location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";
    if (error) {
        let error = error.message;
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleLogIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <Form className="reg">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={handleLogIn} variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
            <p>{error}</p>
        </div>
    );
};

export default EmailLogIn;