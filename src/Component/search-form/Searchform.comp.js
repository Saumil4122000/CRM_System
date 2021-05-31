import React from 'react'
import Proptypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {filterSearchTicket} from '../../pages/ticket-list/ticketAction'
import {Form,Row,Col} from 'react-bootstrap'
export const Searchform = () => {
    const dispatch = useDispatch();

    const handleOnChange=e=>{
        const {value}=e.target;
        dispatch(filterSearchTicket(value))
    }
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column  sm="2">Search:{""}</Form.Label>
                <Col sm="10">
                    <Form.Control name="searchStr" onChange={handleOnChange}  placeholder="search...">

                    </Form.Control>
                </Col>
            </Form.Group>
        </Form>
    )
}
// Searchform.propTypes={
//     handleOnChange:Proptypes.func.isRequired,
//     str:Proptypes.string.isRequired
// }