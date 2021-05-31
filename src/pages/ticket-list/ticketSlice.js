import {createSlice} from '@reduxjs/toolkit'
const initialState={
    tickets:[],
    isLoading:false,
    error:'',
    searchTicketList:[]
}
const ticketListslice=createSlice({
    name:"ticketList",
    initialState,
    reducers:{
        fetchTicketLoading:(state)=>{
            state.isLoading=true
        },
        fetchTicketSuccess:(state,action)=>{
            state.tickets=action.payload;
            state.isLoading=false;
            state.searchTicketList=action.payload
        },
        fetchTicketFail:(state,{payload})=>{
            state.isLoading=false;
            state.error=payload
        }, 
        searchTicket:(state,{payload})=>{
            state.searchTicketList=state.tickets.filter(row=>{
                if(!payload) return row;
                return row.subject.toLowerCase().includes(payload.toLowerCase())
            })
        }         
    }
})

const {reducer,actions}=ticketListslice;
export const {fetchTicketLoading,fetchTicketSuccess,fetchTicketFail,searchTicket}=actions
export default reducer;