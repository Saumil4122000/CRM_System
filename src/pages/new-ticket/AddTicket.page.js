import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {PageBreadcrumb} from '../../Component/breadcrumb/Breadcrumb.comp'
import {AddTicketForm} from '../../Component/add-ticket-form/AddTicketForm.comp'
import {shortText} from '../../utils/validation'


const initialFrmDt={
    subject:"",
    issueDate:"",
    details:""
};
const initialFrmError={
    subject:false,
    issueDate:false,
    details:false
}
export const AddTicket = () => {
        // const handleOnSubmit;

    const [frmData, setfrmData] = useState(initialFrmDt);
    const [frmDataError, setfrmDataError] = useState(initialFrmError)

    useEffect(() => {}, [frmData,frmDataError])

    const handleOnchange=(e)=>{
       
        const {name,value}=e.target;
        // Passing the initialFrmDt if there is data available in initialFrmDt , and passing the data which are changes 
        setfrmData({...frmData,[name]:value})
        // console.log(name,value);

    };

    const handleOnSubmit= async(e)=>{
        e.preventDefault()
        setfrmDataError(initialFrmError)
        
        const isSubjectValid=await shortText(frmData.subject);
         setfrmDataError({
            ...initialFrmError,subject:!isSubjectValid
        })

        console.log("Form submit request is received",frmData);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New ticket"/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddTicketForm handleOnSubmit={handleOnSubmit} handleOnchange={handleOnchange} frmDt={frmData}
                        frmDataError={frmDataError}
                    ></AddTicketForm>
                </Col>
            </Row>
        </Container>
    )
}
 