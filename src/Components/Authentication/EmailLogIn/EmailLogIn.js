import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
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
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );
    let from = location.state?.from?.pathname || "/";
    if (error || error2) {
        let error = error?.message || error2?.message;

    }
    if (user) {

    }
    const handleReset = async () => {
        await sendPasswordResetEmail(email)
        alert('sent email')
        navigate(from, { replace: true })
    }
    const handleLogIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('accessToken', data.token)
            })
        navigate(from, { replace: true })
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

                <Button onClick={handleLogIn} className="mb-2" variant="primary" type="submit">
                    LOGIN
                </Button>


            </Form>
            <div className="d-flex justify-content-center">
                <input type="text" name="reset email" placeholde="eneter email to reset" id="" /><br></br>

                <Button onClick={handleReset} variant="primary" className="m-2" type="submit">
                    reset password.....
                </Button>
            </div>

            <p>{error}</p>
        </div>
    );
};

export default EmailLogIn;