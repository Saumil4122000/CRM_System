import React from 'react'
import icon from '../../assets/img/logo.png'
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


export const Header = () => {
    const history=useHistory()
    const logOut=()=>{
        sessionStorage.removeItem('accessJWT')
        history.push("/")
    }
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
                <img src={icon} width="50px" alt="LOGO" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/dashboard"><Nav.Link >DashBoard</Nav.Link></LinkContainer>
                    <LinkContainer to="/tickets"><Nav.Link >Tickets</Nav.Link></LinkContainer>
                    <Nav.Link onClick={logOut}>SignOut</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}







