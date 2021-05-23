import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { DefaultLayout } from '../../layout/DefaultLayout'

const isAuth=true
export const PrivateRoute = ({children,...rest}) => {
    return (
        <Route
            {...rest}
            render={()=>
                // If login is authorised then it will render child otherwise goto login page

                isAuth?
                <DefaultLayout>{children}</DefaultLayout>
                
                :
                <Redirect to="/"></Redirect>
            }
        />
    )
}
