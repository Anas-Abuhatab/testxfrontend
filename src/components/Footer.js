import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap';

 class Footer extends Component {
    render() {
        return (
            <div>
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        
                           
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer
