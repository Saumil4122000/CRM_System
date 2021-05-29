import React,{useState} from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Login } from '../../Component/Login/Login.comp'
import { ResetPassword } from '../../Component/password-reset/PasswordReset.comp'
import "./entry.style.css"


export const Entry = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [frmLoad, setFrmLoad] = useState("login")

    //1) Suppose some input  field changes suppose it is email then it throws events so name="email" so after that it calls the setEmail method so email in useState variable which is input that are given
    // 2)After setting the value of email it will pass to Login 
    const handleOnchange=e=>{
        const {name,value}=e.target
        switch (name) {
            case "email":
                setEmail(value)
                break;
            case "pass":
                setPassword(value)
                break;
            default:break;
            
        }
        // console.log(name,value)

    }

    const handleOnSubmit= e =>{
        e.preventDefault();
        if(!email || !password){
            alert("Fill up all form details!");
        }
    };

    const handleOnResetSubmit= e =>{
        e.preventDefault();
        if(!email){
            alert("Fill up all form details!");
        }
        console.log(email)
    };

    const formSwitcher= frmtype =>{
        setFrmLoad(frmtype);
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {
                frmLoad==="login" 
                && 
                <Login handleOnchange={handleOnchange} 
                email={email} pass={password} handleOnSubmit={handleOnSubmit}
               formSwitcher={formSwitcher}
                ></Login>
                }
                {
                frmLoad==="rest"
                 && 
                  <ResetPassword handleOnchange={handleOnchange} 
                  handleOnResetSubmit={handleOnResetSubmit} email={email} 
                formSwitcher={formSwitcher}
                ></ResetPassword>
                }
            </Jumbotron>
        </div>
    )
}
 