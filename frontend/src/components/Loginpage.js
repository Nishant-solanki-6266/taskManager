import React, { useState } from 'react'
import { Container, Alert, Row, Col, Form, Button } from 'react-bootstrap'
import NavigationBar from './NavigationBar';
import { Login } from '../Service/TaskService';
import Success from './Success';
import TaskList from './TaskList'
import NavigationBar2 from './Navigationbar2';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Loginpage() {


    // here are states 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAlert, setIsAlert] = useState(false)
    const [CurrentUser, setCurrentUser] = useState()
    const [isLogin, setIsLogin] = useState(false)
    const [ani, setAni] = useState(false)
    const navigate = useNavigate()

    // here are functions     

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = { email: username, password: password }
        let x = await Login(data)
        console.log(x)

        if (x.status === 200 && x.data.status === 1) {

            {
                swal({
                    title: x.data.massage,
                    text: "",
                    icon: "error",
                })
            }
        }
    else if (x.status === 200) {

            swal({
                title: "loged in successfully ",
                text: "",
                icon: "success",
            })

            // here we set into localstorage  

            localStorage.setItem("data", JSON.stringify(x.data))

            navigate("/task-list")
        }
        else if (x.status === 204) {
            swal({
                title: "User Not Found  ",
                text: "",
                icon: "error",
            })

        }

    }

    return (
        <div>

            {!isLogin ?
                <div>

                    <NavigationBar></NavigationBar>
                    <Container className="mt-5">
                        <Alert className='text-center'> <b>This is Login  page</b> </Alert>
                        {ani ?

                            <div>
                                <Success></Success>
                                <h3 className='text-center'>   {CurrentUser.name} {" ..."} You Have Loged In SuccessFully      </h3>
                            </div>



                            :
                            <Container className='border border-2 mt-5'>

                                <Row className="justify-content-center mt-3">
                                    <Col xs={6}>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label><b>Email :</b></Form.Label>
                                                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Email " />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label className='mt-3'><b>Password :</b></Form.Label>
                                                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                            </Form.Group>
                                            <div className='text-center mt-3'>
                                                <Button variant="primary" type="submit" >
                                                    Login
                                                </Button>

                                                <Link to="/register" className='mx-5 '>
                                                    <Button> Register </Button>
                                                </Link>
                                            </div>

                                        </Form>
                                    </Col>
                                </Row>

                                <Container className='mt-3 text-center' >
                                    {isAlert ?
                                        <Alert variant="danger"><b> Invalid username or password</b> </Alert> : null}
                                </Container>

                            </Container>}

                    </Container>

                </div>
                :
                <div>



                    <TaskList></TaskList>

                </div>
            }








        </div>
    )
}

export default Loginpage
