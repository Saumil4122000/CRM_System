import React from 'react'
import Proptyes from 'prop-types'
import { Form, Button, FormControl, FormLabel, FormText } from 'react-bootstrap'
export const UpdateTicket = ({msg,handleOnSubmit,handleOnChange}) => {
    return (
        <Form onSubmit={ handleOnSubmit}>
            <FormLabel>Reply</FormLabel>
            <FormText>Please reply your ticket here or update the ticket</FormText>
            <FormControl as="textarea" row="5" name="detail" value={msg} 
            onChange={handleOnChange}>
            </FormControl>
            <div className="text-right mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}


UpdateTicket.prototype = {
    msg: Proptyes.string.isRequired,
    handleOnChange:Proptyes.func.isRequired,
    handleOnSubmit:Proptyes.func.isRequired
}