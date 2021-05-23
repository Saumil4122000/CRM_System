import React from 'react'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

// Gets the value from Entry.page.js
export const Login = ({ handleOnchange, email, pass,handleOnSubmit,formSwitcher}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Client Login</h1>
                        <hr />
                        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email"
                                    name="email"
                                    // Sets the input value come from the Entry.page.js so that it will be visible to input field
                                    // Suppose some change occur then it will call the method handleOnchange
                                    value={email}
                                    onChange={handleOnchange}
                                    placeholder="Enter Email"
                                    ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>PassWord</Form.Label>
                                <Form.Control type="password"
                                    name="pass"
                                    value={pass}
                                    
                                    onChange={handleOnchange}
                                    placeholder="Enter Password"
                                    ></Form.Control>
                            </Form.Group>
                            <Button type="submit">
                                Login
                            </Button>
                        </Form>
                        <hr />
                        <Row>
                            <Col>
                                <a href="#!" onClick={()=>formSwitcher("rest")}>Forgot Password</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}


// PropTypes ensures that entry.page.js passes all three values compulsory
Login.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired
}