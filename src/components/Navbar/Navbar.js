import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navigation = () => {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState(null);

    useEffect(() => {
        setActiveNav(location.pathname);
    }, [location]);

    console.log(location.pathname)
    return (
        <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Ya Jadi Gitu Cuy..</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"} className={activeNav === "/" ? "text-info" : " "}>Homepage</Nav.Link>
                            <Nav.Link as={Link} to={"/gallery"} className={activeNav === "/gallery" ? "text-info" : " "}>Gallery</Nav.Link>
                            <Nav.Link as={Link} to={"/posts"} className={activeNav === "/posts" ? "text-info" : " "}>Posts</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        </React.Fragment>
    )
}

export default Navigation