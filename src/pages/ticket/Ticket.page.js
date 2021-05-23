import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../Component/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../Component/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../Component/update-ticket/UpdateTicket.comp'

const ticket=tickets[0]
export const Ticket = () => {
    const [message, setmessage] = useState("")

    useEffect(() => {return () => {}}, [message])
    const handleOnChange=(e)=>{
        setmessage(e.target.value)
    }

    const handleOnSubmit=()=>{
        alert("Form Submitted");
    }

    return (
       <Container>
           <Row>
               <Col>
                    <PageBreadcrumb page="Ticket"></PageBreadcrumb>
               </Col>
           </Row>
           <Row>
               <Col className="text-weight-bolder text-secondary">
                  <div className="subject">Subject: {ticket.subject}</div>
                  <div className="date">Ticket Opened:{ticket.addedAt}</div>
                  <div className="status">Status: {ticket.status}</div>
               </Col>
               
               <Col className="text-right">
                 <Button variant="outline-info">Close Ticket</Button>
               
               </Col>
           </Row>
           <Row className="mt-4">
               <Col>
                    <MessageHistory msg={ticket.history}/>
               </Col>
           </Row>

           <hr />
           <Row className="mt-4">
               <Col>
                    <UpdateTicket msg={message} handleOnSubmit={handleOnSubmit}  handleOnChange={handleOnChange}></UpdateTicket>
               </Col>
            </Row>
       </Container>
    )
}
