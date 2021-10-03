import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButtom from './LogoutButton';
import { Navbar, Container, Nav } from 'react-bootstrap';


export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                               
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/Favourites">Favourites</Nav.Link>

                            </Nav>
                            <Nav>
                            {this.props.isAth ? <LogoutButtom />: <LoginButton /> }
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
