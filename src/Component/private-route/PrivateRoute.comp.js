import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { DefaultLayout } from '../../layout/DefaultLayout'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewAccessToken } from "../../api/userApi";
import { loginSuccess } from "../Login/loginslice";
//const isAuth=true;
export const PrivateRoute = ({ children, ...rest }) => {
    const { isAuth } = useSelector(state => state.login)
    const dispatch = useDispatch()
    // console.log(state);
    console.log(isAuth);
    useEffect(() => {
        const updateAccessJWT=async () => {
            const result=await fetchNewAccessToken();
            result && dispatch()
        }
        
    
        sessionStorage.getItem("accessJWT") && dispatch(loginSuccess())
    }, [dispatch]);
    return (
        <Route
            {...rest}
            render={() =>
                // If login is authorised then it will render child otherwise goto login page

                isAuth ?
                    <DefaultLayout>{children}</DefaultLayout>
                    :
                    <Redirect to="/"></Redirect>
            }
        />
    )
}
