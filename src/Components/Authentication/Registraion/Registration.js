import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import "./Registration.css"

const Registration = () => {
    let location = useLocation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (error) {
        let Error = error.message
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        fetch('http://localhost:5000/register', {
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
    console.log(email)
    console.log(user)




    return (
        <div>
            <Form className="reg">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required autocomplete="none" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>confirmPassword</Form.Label>
                    <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>
                {
                    password !== confirmPassword ?
                        <Button variant="primary" type="submit" disabled>
                            Submit
                        </Button>
                        :
                        <Button onClick={handleRegister} variant="primary" type="submit">
                            Register
                        </Button>


                }
                <p>{Error}</p>

            </Form>
            <p className="text-center">already have an account? <Link to="/login"> LogIn</Link></p>
            <h6 className="m-2 text-center">or</h6>

            <h5 className="text-center mb-2">connect with</h5>
            <hr className="w-25 mx-auto"></hr>

            <SocialLogIn></SocialLogIn>



        </div>
    );
};

export default Registration;