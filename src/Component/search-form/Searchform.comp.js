import React from 'react'
import Proptypes from 'prop-types'
import {Form,Row,Col} from 'react-bootstrap'
export const Searchform = ({handleOnChange,str}) => {
    console.log(str)
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column  sm="2">Search:{""}</Form.Label>
                <Col sm="10">
                    <Form.Control name="searchStr" onChange={handleOnChange} value={str} placeholder="search...">

                    </Form.Control>
                </Col>
            </Form.Group>
        </Form>
    )
}
Searchform.propTypes={
    handleOnChange:Proptypes.func.isRequired,
    str:Proptypes.string.isRequired
}