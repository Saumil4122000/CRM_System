import React,{useState,useEffect} from 'react'
import {Row,Container,Col, Button} from 'react-bootstrap'
import {PageBreadcrumb} from '../../Component/breadcrumb/Breadcrumb.comp'
import { Searchform } from '../../Component/search-form/Searchform.comp'
import {TicketTable} from '../../Component/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'


export const TicketLists = () => {

    const [str, setStr] = useState(" ")
    const [dispTicket, setdispTicket] = useState(tickets)
    useEffect(() => {
        // setdispTicket(tickets)
    }, [str,dispTicket])

    const handleOnChange=(e)=>{
        const {value}=e.target
        setStr(value)
        // console.log(e.target);
        searchTicket(value)
    }
    
    const searchTicket=sttr=>{
       const displayTickets=tickets.filter(row=>
       row.subject.toLowerCase().includes(sttr.toLowerCase()))
        setdispTicket(displayTickets)
    }

    return (
        <Container>
                <Row>
                    <Col>
                            <PageBreadcrumb page="Ticket Lists"></PageBreadcrumb>
                    </Col>
                </Row>
                <Row  className="mt-4">
                    <Col>
                         <Button variant="info">Add Ticket</Button>
                    </Col>
                    
                    <Col className="text-right">
                        <Searchform handleOnChange={handleOnChange} str={str}></Searchform>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                            <TicketTable tickets={dispTicket}/>
                    </Col>
                </Row>
        </Container>
    )
}
