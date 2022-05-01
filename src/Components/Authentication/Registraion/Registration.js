import { sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import "./Registration.css"

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (error) {
        let Error = error.message
    }
    if (user) {
        navigate("/")
    }
    const handleRegister = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
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
                            Submit
                        </Button>


                }
                <p>{Error}</p>

            </Form>
            <h6 className="mb-2 text-center">or</h6>

            <h5 className="text-center mb-2">connect with</h5>
            <hr className="w-25 mx-auto"></hr>
            <SocialLogIn></SocialLogIn>



        </div>
    );
};

export default Registration;