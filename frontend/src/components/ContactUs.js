import React from 'react'
import NavigationBar from './NavigationBar'
import { Alert, Container } from 'react-bootstrap'

function ContactUs() {
  return (
    <div>
       <NavigationBar></NavigationBar>
      
      <Container className='text-center mt-5'>
        <Alert> Contact Us ......</Alert>
      </Container>
    </div>
  )
}

export default ContactUs
