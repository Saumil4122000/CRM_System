import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from './pages/ticket-list/ticketSlice'
import loginReducer from './Component/Login/loginslice'
const store=configureStore({
    reducer:{
        tickets:ticketsReducer,
        login:loginReducer
    }
})

export default store