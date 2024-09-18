import React from 'react'
import {Container ,Alert} from 'react-bootstrap'

function Header(props) {
  return (
    <div>

        <Container className='text-center mt-5'>
            <Alert ><b>{props.alertText}</b></Alert>
            <p> {props.disc}</p>
        </Container>
      
    </div>
  )
}

export default Header;
