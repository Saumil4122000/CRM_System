import React,{useState} from 'react'
import { Row, Col, Form, Container, Button,Spinner,Alert } from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import {useDispatch,useSelector} from 'react-redux'
import { loginPending, loginSuccess, loginFail } from './loginslice'
// Gets the value from Entry.page.js
import {useHistory} from 'react-router-dom';
import {getUserProfile} from '../../pages/dashboard/userAction';
import { userLogin } from "../../api/userApi";
export const Login = ({ formSwitcher }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isLoading,isAuth,error}=useSelector(state=>state.login)
    const dispatch = useDispatch()
    const history=useHistory()
    const handleOnchange = e => {

        const { name, value } = e.target
        switch (name) {
            case "email":
                setEmail(value)
                break;
            case "pass":
                setPassword(value)
                break;
            default: break;
        }
    // dispatch(loginPending())
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Fill up all form details!");
        }

        dispatch(loginPending())
        try {
            const isAuth=await userLogin({email,password});
        //    console.log(isAuth)
            if(isAuth.status==="Error"){
                dispatch(loginFail(isAuth.message))
            }
          dispatch(loginSuccess())
        //   Login success then redirect to dashboard page
          dispatch(getUserProfile())
        //   once user login then fetch the user profile
          history.push("/dashboard")
        } catch (error) {
            dispatch(loginFail(error.message))
        }
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Client Login</h1>
                        <hr />
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email"
                                    name="email"
                                    // Sets the input value come from the Entry.page.js so that it will be visible to input field
                                    // Suppose some change occur then it will call the method handleOnchange
                                    value={email}
                                    onChange={handleOnchange}
                                    placeholder="Enter Email"
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>PassWord</Form.Label>
                                <Form.Control type="password"
                                    name="pass"
                                    value={password}

                                    onChange={handleOnchange}
                                    placeholder="Enter Password"
                                ></Form.Control>
                            </Form.Group>
                            <Button type="submit">
                                Login
                            </Button>

                            {isLoading && <Spinner variant="primary" animation="border"></Spinner>}
                        </Form>
                        <hr />
                        <Row>
                            <Col>
                                <a href="#!" onClick={() => formSwitcher("rest")}>Forgot Password</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}


//PropTypes ensures that entry.page.js passes all three values compulsory
Login.propTypes = {
    formSwitcher: PropTypes.func.isRequired
}