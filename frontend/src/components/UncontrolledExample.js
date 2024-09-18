import { Alert, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import CountTask from './CountTask';

function UncontrolledExample() {
    return (
        // <Carousel>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src="C:\Users\91735\Desktop\alok Programming\TaskManager\frontend\src\components\nnn.png"
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src="holder.js/171x180"
        //             alt="Second slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>

        //         <div className='border border-2 bg-primary'>




        //         </div>

        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>
        //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>

        <div>

            <>

                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-4"> My Task Manager </h1> 
                        <p classNam e="lead">A simple and effective way to manage your tasks.</p>

                        <CountTask>  </CountTask>

                        {/* <Container>
                            <Alert className='text-center '> <b>Welcome to TaskManage Web App</b> </Alert>
                        </Container> */}
                        <div className='my-5'>

                            < Link to="/login" className="btn btn-info mx-2">
                                Login
                            </Link>
                            < Link to="/register" className="btn btn-info mx-2">
                                Register
                            </Link>

                            < Link to="/about" className="btn btn-primary mx-2">
                                Learn More
                            </Link>
                        </div>

                    </div>
                </div>




                <div className="container mt-5">
                    <div className="row">
                            <div className="col-md-4 border border-3 ">
                                <h3>Feature 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                    euismod odio, gravida pellentesque urna varius vitae.
                                </p>
                            </div>
                            <div className="col-md-4 border border-3">
                                <h3>Feature 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                    euismod odio, gravida pellentesque urna varius vitae.
                                </p>
                            </div>
                            <div className="col-md-4 border border-3">
                                <h3>Feature 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                    euismod odio, gravida pellentesque urna varius vitae.
                                </p>
                            </div>

                        



                    </div>
                </div>
            </>

        </div>
    )
}

export default UncontrolledExample;