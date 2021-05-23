import React from 'react'
import icon from '../../assets/img/logo.png'
import {Navbar,Nav} from 'react-bootstrap'

export const Header = () => {
    return (
       <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
           <Navbar.Brand>
               <img src={icon} width="50px" alt="LOGO"/>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav"/>
           <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    <Nav.Link href="/dashboard">DashBoard</Nav.Link>
                    <Nav.Link href="/">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
           </Navbar.Collapse>
       </Navbar>
    )
}
