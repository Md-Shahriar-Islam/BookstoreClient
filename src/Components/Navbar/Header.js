import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <Nav.Link as={Link} to="/add">Add Items</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>
                            <Nav.Link as={Link} to="register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;