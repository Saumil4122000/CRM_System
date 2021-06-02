import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from './pages/ticket-list/ticketSlice'
import loginReducer from './Component/Login/loginslice'
import userReducer from './pages/dashboard/userSlice'
const store=configureStore({
    reducer:{
        tickets:ticketsReducer,
        login:loginReducer,
        user:userReducer
    }
})

export default store