import React from 'react'
import { Alert, Col, Container, Row ,Jumbotron} from 'react-bootstrap'
import NavigationBar from './NavigationBar'

function Aboutus() {
  return (
    <div>

        <NavigationBar></NavigationBar>
      
      <Container className='text-center mt-5'>
        <Alert> About Us ......</Alert>
      </Container>

      <Container>
      <span>
        <h1>About Page</h1>
        <p>
          This is a sample about page created using React Bootstrap.
        </p>
      </span>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            suscipit velit vel mi accumsan, et consequat magna rhoncus.
            Vivamus gravida libero vel libero fringilla, id tempor lectus
            dictum.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Aboutus
