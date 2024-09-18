import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

function NavigationBar() {
    return (
        <div>

            <Navbar bg="dark" expand="lg" className='bg-light navbar-dark'>
                <Container>
                    <Navbar.Brand href="#home">My Task Bar </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link > DashBord </Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to='/create-task'>
                                <Nav.Link >Create Task</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer to='/task-list'>
                                <Nav.Link >Task List </Nav.Link>
                            </LinkContainer> */}

                            <LinkContainer to='/about'>
                                <Nav.Link >About </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/contact'>
                                <Nav.Link >Contact Us  </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/career'>
                                <Nav.Link > Career </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <Nav.Link >Login</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/register'>
                                <Nav.Link >Register</Nav.Link>
                            </LinkContainer>







                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavigationBar
