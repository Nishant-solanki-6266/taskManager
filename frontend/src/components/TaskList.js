import React, { useEffect, useState } from "react";
import Header from "./Header";
import { DeleteTask, GetTask, MarkAscompleated } from '../Service/TaskService';
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import NavigationBar2 from "./Navigationbar2";
import "./TaskList.css"

function TaskList() {

  let totaltask = 0;
  let x = localStorage.getItem("data")
  x = JSON.parse(x)
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState([])
  const [id, setid] = useState(x._id)
  const [current, setcurrent] = useState(x)





  const FetchTask = async () => {
    const res = await GetTask(id);
    console.log(res);
    setData(res.data)
    setTasks(res.data.x)
  };


  useEffect(() => {
    FetchTask();
  }, []);

  const deleteTask = async (x) => {

    await DeleteTask(x)
    FetchTask()

  }
  const markAsCompleated = async (id) => {
    console.log(id);
    await MarkAscompleated(id)
    FetchTask()
  }
  return (
    <div>
      <NavigationBar2></NavigationBar2>

      <Container>
        <Alert className="text-center mt-4 ">
          <span><b>{current.name} Ji Welcome to TaskManager </b> </span>
          <br />
          <b>App Your Tasks are  Here ......</b></Alert>
        <Container className="mt">

          <Row className="mt-1">
            <Col lg="4" >
              <p className="text-center"> <b><span>Total Task - {data.totalTask}</span></b> </p>
            </Col>
            <Col lg="4" >
              <p className="text-center"> <b><span > Completed - {data.totalcompleated}</span></b> </p>


            </Col>
            <Col lg="4" >
              <p className="text-center"><b> <span> Pending - {data.totalTask - data.totalcompleated}</span></b> </p>
            </Col>
          </Row>


        </Container>
        <Row>



          {tasks.map((e) => {
            return (

              <Col lg={4} className="my-2">
                <Card>
                  <Card.Body>
                    {e.IsCompleated ?
                      <div> <p>Status -  <span className="text-successn TaskStatus">Completed</span> </p></div>
                      // <Alert variant="success" className="text-center"> <b>Compleated</b> </Alert> 
                      :
                      // <Alert variant="warning" className="text-center"> <b>Pending</b> </Alert>
                      <div> <p>Status -  <span className="text-danger">pending</span> </p></div>
                    }
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                      {e.description}
                      <br></br>
                      <span>Created - </span>
                      {e.CreatedOn}
                      <br></br>
                      <span> Deadline - </span>
                      {e.deadline}
                    </Card.Text>
                    <Button variant="danger" className='btn-sm' onClick={() => {
                      deleteTask(e._id)
                    }}>delete task </Button>
                    {!e.IsCompleated ?
                      <Button className="mx-4 btn-sm" onClick={() => {
                        markAsCompleated(e._id)
                      }}>Mark as  Compleated</Button>
                      : null
                    }
                  </Card.Body>
                </Card>
              </Col>

            )
          })}

        </Row>
      </Container>
    </div>
  );
}

export default TaskList;
