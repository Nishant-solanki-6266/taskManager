import React from 'react'
import Header from './Header'
import { Container, Carousel } from 'react-bootstrap'
import './Dashbord.css'
import Loginpage from './Loginpage'
import NavigationBar from './NavigationBar'
import UncontrolledExample from './UncontrolledExample'
import CountTask from './CountTask'

function DashBord(props) {
    return (
        <div className=''>

            <NavigationBar></NavigationBar>


            {/* <Header alertText="Welcome to My Task App , Get Happiness from Compleation Of Your Task  "
                disc=' this is fullstack app which is created by mr govind bamaniya 
             who is a great full stack developer '></Header> */}


            <Container className='mt-5'>




            <UncontrolledExample></UncontrolledExample>


            </Container>

        </div >
    )
}

export default DashBord
