import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuth: false,
    error: ""
}
const loginslice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
                state.isAuth = true;
                state.error = ""
        },
        loginFail: (state, { payload }) => {
            state.isLoading = false;
                state.error = payload
        }
    }
})



const {reducer,actions}=loginslice
export const {loginPending,loginSuccess,loginFail} =actions

export default reducer;