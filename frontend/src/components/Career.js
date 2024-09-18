import React from 'react'
import NavigationBar from './NavigationBar'
import { Alert, Container } from 'react-bootstrap'

function Career() {
  return (
    <div>
         <NavigationBar></NavigationBar>
      
      <Container className='text-center mt-5'>
        <Alert> <b> This is Career Page </b></Alert>
      </Container>
    </div>
  )
}

export default Career
