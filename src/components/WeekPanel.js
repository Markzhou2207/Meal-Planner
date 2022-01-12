import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
const WeekPanel = ({schedule}) => {
    console.log(schedule[0])
    return (
        <div>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Day</th>
                        <th>Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Monday</th>
                            <th>{schedule.monday}</th>
                        </tr> 
                        <tr>
                            <th>Tuesday</th>
                            <th>Chicken</th>
                        </tr> 
                        <tr>
                            <th>Wednesday</th>
                            <th>Chicken</th>
                        </tr> 
                        <tr>
                            <th>Thursday</th>
                            <th>Chicken</th>
                        </tr> 
                        <tr>
                            <th>Friday</th>
                            <th>Chicken</th>
                        </tr> 
                    </tbody>
                
                </Table>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default WeekPanel
