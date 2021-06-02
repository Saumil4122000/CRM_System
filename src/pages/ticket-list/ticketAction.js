import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail,searchTicket } from './ticketSlice'
import {getAllTicket} from '../../api/ticketApi'

export const fetchAllTickets = () => async(dispatch) => {
    dispatch(fetchTicketLoading)
    try {
        const result = await getAllTicket()
        console.log(result)
        dispatch(fetchTicketSuccess(result.data.result))
    } catch (error) {
        dispatch(fetchTicketFail(error.message))
    }
}

export const filterSearchTicket=(str)=>(dispatch)=>{
    dispatch(searchTicket(str))
}
