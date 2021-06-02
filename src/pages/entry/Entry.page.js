import React, { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Login } from '../../Component/Login/Login.comp'
import { ResetPassword } from '../../Component/password-reset/PasswordReset.comp'
import "./entry.style.css"


export const Entry = () => {
    const [frmLoad, setFrmLoad] = useState("login")
    const handleOnResetSubmit = e => {
     e.preventDefault();
    };

    const formSwitcher = frmtype => {
        setFrmLoad(frmtype);
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {
                    frmLoad === "login"
                    &&
                    <Login
                        formSwitcher={formSwitcher}
                    ></Login>
                }
                {
                    frmLoad === "rest"
                    &&
                    <ResetPassword 
                       handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                    ></ResetPassword>
                }
            </Jumbotron>
        </div>
    )
}
