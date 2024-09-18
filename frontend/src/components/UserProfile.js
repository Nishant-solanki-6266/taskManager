import React, { useState } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import NavigationBar2 from './Navigationbar2'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function UserProfile() {

    let data = localStorage.getItem("data")
    data = JSON.parse(data)
    const [userdetail, setUserdetail] = useState(data)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("data")
        navigate("/")
    }
    return (
        <div>


            <NavigationBar2></NavigationBar2>
            <Container>


                <Alert className='mt-5 text-center'> <b> Personal Details </b>  </Alert>

                <div className=''>
                    <div className=''>
                    <div className='mx-5'>
                            <h3 className='col-md-6'>Name - <span> {userdetail.name}</span></h3>
                            <h3 className='col-md-6'>Email - <span> {userdetail.email}</span></h3>
                            <h3 className='col-md-6'>Age - <span> {userdetail.age}</span></h3>
                            <h3 className='col-md-6'>Gender- <span> {userdetail.gender}</span></h3>
                        </div>
                    </div>
                    <div className=''>
                      
                    </div>


                </div>


                <Container className='text-center'>

                    {/* <Button className='mx-3'> Edit Personal Details </Button>
                    <Button className='mx-3'> Change Password </Button> */}

                    <Button className='mx-3' onClick={logout}> Logout </Button>


                </Container>




            </Container>

        </div>
    )
}

export default UserProfile
