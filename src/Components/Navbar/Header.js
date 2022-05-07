import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    };
    let userName
    if (user) {
        let userEmail = user.email
        userName = userEmail.split('@')
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">blogs</Nav.Link>

                            <Nav.Link as={Link} to="/manage">Manage Items</Nav.Link>
                            {
                                !user ?
                                    <div></div>
                                    :
                                    <Nav.Link as={Link} to="/add">Add Items</Nav.Link>

                            }
                            {
                                !user ?
                                    <div></div>
                                    :
                                    <Nav.Link as={Link} to="/myitem">My Items</Nav.Link>

                            }


                        </Nav>
                        {
                            user ?
                                <div>
                                    <Button onClick={logout} className="btn btn-dark">signout<span className="text-light mx-4"
                                    >{userName[0]}</span></Button>
                                    <p className="text-light"></p>
                                </div>


                                :
                                <Nav>
                                    <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>
                                    <Nav.Link as={Link} to="/register">
                                        Register
                                    </Nav.Link>
                                </Nav>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;