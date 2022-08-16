import React from 'react'
import {Container, Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbars() {
  return (
      <>
        <Navbar expand="lg" className='navbar py-4' >
            <Container fluid className='main-container text-black'>
                <Link to='/dashboard'>
                <img src={'/images/logo.png'} alt="logo"></img>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Our Services</Nav.Link>
                    <Nav.Link href="#features">Why Us</Nav.Link>
                    <Nav.Link href="#pricing">Testimonial</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    <Button className='ms-3 btn btn-success register'>Register</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    
  )
}
