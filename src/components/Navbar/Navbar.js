import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Ya Jadi Gitu Cuy..</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"} className={activeNav === "/" ? "text-info" : " "}>Homepage</Nav.Link>
                            <Nav.Link as={Link} to={"/gallery"} className={activeNav === "/gallery" ? "text-info" : " "}>Gallery</Nav.Link>
                            <Nav.Link as={Link} to={"/posts"} className={activeNav === "/posts" ? "text-info" : " "}>Posts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Ya Jadi Gitu Cuy..</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"} className={activeNav === "/" ? "text-info" : " "}>Homepage</Nav.Link>
                            <Nav.Link as={Link} to={"/gallery"} className={activeNav === "/gallery" ? "text-info" : " "}>Gallery</Nav.Link>
                            <Nav.Link as={Link} to={"/posts"} className={activeNav === "/posts" ? "text-info" : " "}>Posts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </React.Fragment>
    )
}

export default Navigation