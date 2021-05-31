import {useDispatch} from 'react-redux'
import {fetchAllTickets} from './ticketAction'
import React,{useState,useEffect} from 'react'
import {Row,Container,Col, Button} from 'react-bootstrap'
import {PageBreadcrumb} from '../../Component/breadcrumb/Breadcrumb.comp'
import { Searchform } from '../../Component/search-form/Searchform.comp'
import {TicketTable} from '../../Component/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import {Link} from 'react-router-dom'

export const TicketLists = () => {
    const dispatch = useDispatch()
    const [str, setStr] = useState("")
    // const [dispTicket, setdispTicket] = useState(tickets)
    useEffect(() => {
        // setdispTicket(tickets)
        dispatch(fetchAllTickets())
    }, [str,dispatch])
    // [str,dispTicket])

    // const handleOnChange=(e)=>{
    //     const {value}=e.target
    //     setStr(value)
    //     // console.log(e.target);
    //     searchTicket(value)
    // }
    
    // const searchTicket=sttr=>{
    //    const displayTickets=tickets.filter(row=>
    //    row.subject.toLowerCase().includes(sttr.toLowerCase()))
    //     // setdispTicket(displayTickets)
    // }

    return (
        <Container>
                <Row>
                    <Col>
                            <PageBreadcrumb page="Ticket Lists"></PageBreadcrumb>
                    </Col>
                </Row>
                <Row  className="mt-4">
                    <Col>
                        <Link to="/add-ticket"> <Button variant="info">Add Ticket</Button></Link>
                        
                    </Col>
                    
                    <Col className="text-right">
                        <Searchform ></Searchform>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                            {/* <TicketTable tickets={dispTicket}/> */}
                            <TicketTable></TicketTable>
                    </Col>
                </Row>
        </Container>
    )
}
