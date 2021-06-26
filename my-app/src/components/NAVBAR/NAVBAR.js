import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import './Navber.css';
import ICON from '../../images/icon.png';
import HERO from './HERO'

export default function NAVBAR() {
    return (
        <div className="Navber-section">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand className="brandName" href="#home"><img className="brandImage" src={ICON}></img>MotiveZone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className="navbarLinkStyle" href="#home">Home</Nav.Link>
                        <Nav.Link className="navbarLinkStyle" href="#link">Our Works</Nav.Link>
                        <Nav.Link className="navbarLinkStyle" href="#link">About Us</Nav.Link>
                        <Nav.Link className="navbarLinkStyle" href="#link">Review</Nav.Link>
                        <Nav.Link className="navbarLinkStyle" href="#link">Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button className="navber-button" variant="outline-success">Say Hi</Button>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
                <HERO />
            </div>
        </div>
    )
}
