import React, { useEffect, useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { TotalCount } from '../Service/TaskService'

function CountTask() {

    const [total, setTotal] = useState()


    let count = async () => {
        let x = await TotalCount()
        setTotal(x.data)
        console.log(total);

    }

    useEffect(() => {
        count()

    }, [])
    return (
        <div>


            <Container>
                <Container>
                    <Container>
                        <h3>  Total  Task Created :- {total} </h3>
                    </Container>
                </Container>
            </Container>

        </div>
    )
}

export default CountTask
