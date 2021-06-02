import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: [],
    isLoading: false,
    error: ""
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserPending:(state)=>{
            state.isLoading=true
        },
        getUserSuccess:(state,{payload})=>{
            state.isLoading=false;
            state.user=payload;
            state.error="";
        },
        getUserFail:(state,{error})=>{
            state.isLoading=false;
            state.error=error;
        }
    }
})


const {reducer,actions}=userSlice
export const {getUserPending,getUserSuccess,getUserFail} = actions
export default reducer;