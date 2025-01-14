import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import './AppLayout.style.css'; // Additional styles

const AppLayout = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()
    const searchByKeyword = (event) => {
        event.preventDefault()
        // url 변경
        navigate(`/movies?q=${keyword}`)
    }
    return (
        <div className="app-layout">
            <Navbar expand="lg" className="custom-navbar">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="https://www.chosun.com/resizer/v2/SV3D6XKQ2VDVJFXIT7GS4J435E.jpg?auth=5317baed3ed279f5dd855b29cda5f6114598b818cc59e76946e060a8159bdcd9&width=616"
                            alt=""
                            width={150}
                            height={60}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 custom-nav-links"
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/movies">Movies</Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchByKeyword}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 custom-search"
                                aria-label="Search"
                                value={keyword}
                                onChange={(event)=> setKeyword(event.target.value)}
                            />
                            <Button variant="outline-danger" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
