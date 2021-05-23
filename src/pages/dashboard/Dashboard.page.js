import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {TicketTable} from '../../Component/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import {PageBreadcrumb} from '../../Component/breadcrumb/Breadcrumb.comp'
import {Link} from 'react-router-dom'

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Dashboard"></PageBreadcrumb>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Link to="/add-ticket"> <Button variant="info" style={{'fontSize':'2rem','padding':'10px 30px'}}>Add New Ticket</Button></Link>
                   
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb2">
                    <div>Total Ticket:500</div>
                    <div>Panding Ticket: 20</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
                    Recently Added Tickets            
                </Col>
            </Row>     
            <br />
            <Row>
                <Col className="recent">
                    <TicketTable tickets={tickets}></TicketTable>          
                </Col>
            </Row>   
        </Container>
    )
}
