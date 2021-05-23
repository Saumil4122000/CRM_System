import React from 'react'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

// Gets the value from Entry.page.js
export const ResetPassword = ({ handleOnchange,handleOnResetSubmit,email,formSwitcher}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Reset Password</h1>
                        <hr />
                        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                            
                            <Button type="submit">
                                Reset Password
                            </Button>
                        </Form>
                        <hr />
                        <Row>
                            <Col>
                                <a href="#!"  onClick={()=>formSwitcher("login")}>Login Now</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}


// PropTypes ensures that entry.page.js passes all three values compulsory
ResetPassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
      formSwitcher:PropTypes.func.isRequired
}