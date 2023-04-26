import moment from 'moment/moment';
import React from 'react';
import { Button, Container, NavDropdown, Navbar,Nav } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>
            <Container>
            <div className='text-center'>
           <h1 className=''>The News of Dragon Clints</h1>
            <h2 className='text-center '>nav</h2>
            <p className='text-secondary '><small>Journalism Without Fear or Favor</small></p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                    <Button variant="danger">Latest</Button>
                  
                   <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>
            </Container>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
            <Button variant="primary">Login</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;