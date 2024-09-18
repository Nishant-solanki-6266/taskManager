import {React , useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ChangeProfile() {
  return (

    // here are states 

    
    <div>
        const [formData, setFormData] = useState({})
    
        
<Form onSubmit={handleFormSubmit} className='mt-3'>

<Row>
    <Col lg="6">
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
        </Form.Group>
    </Col>
    <Col lg="6">
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
        </Form.Group>
    </Col>
</Row>


<Row>
    <Col lg="6">
        <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
                type="number"
                placeholder="Enter age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
            />
        </Form.Group>
    </Col>
    <Col lg="6">
        <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
            >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
            </Form.Control>
        </Form.Group>
    </Col>
</Row>

<Row>
    <Col lg="6">
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
        </Form.Group>
    </Col>

    <Col lg="6">


    </Col>
</Row>

<br />

<div className='text-center'>
    <Button variant="primary" type="submit">
        Register
    </Button>
    <Link to="/login" className='mx-5'>
        <Button> Login </Button>
    </Link>

</div>






</Form>
      
    </div>
  )
}

export default ChangeProfile
