import React from 'react'
import { Jumbotron, Form, Row, Button, Col, FormLabel } from 'react-bootstrap'
import {PropTypes} from 'prop-types'
import '../add-ticket-form/add-ticket-form.style.css'


export const AddTicketForm = ({handleOnSubmit,handleOnchange,frmDt,frmDataError}) => {

    console.log(frmDt)

    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light" >
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <FormLabel><h1 className="text-info text-center mb-5">New Ticket</h1></FormLabel>


                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={6}>
                        <Form.Control type="text"
                            name="subject"
                            // minLength="3"
                            maxLength="100"
                            value={frmDt.subject}
                            onChange={handleOnchange}
                            placeholder="Enter Subject"
                            required
                        ></Form.Control>
                        <Form.Text className="text-danger">{frmDataError.subject && "Subject is required"}</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={6}>
                        <Form.Control type="date"
                            name="issueDate"
                            value={frmDt.issueDate}
                            onChange={handleOnchange}
                            required
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Details</Form.Label>
                    <Col sm={6}>
                        <Form.Control as="textarea"
                            name="details"
                            rows="5"
                            value={frmDt.detail}
                            onChange={handleOnchange}
                            required
                        ></Form.Control>
                    </Col>
                </Form.Group>

                <Button type="submit" variant="info" block>
                    Submit Ticket
                 </Button>

            </Form>
        </Jumbotron>
    )
}


AddTicketForm.propTypes={
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnchange:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
    frmDataError:PropTypes.object.isRequired      
}