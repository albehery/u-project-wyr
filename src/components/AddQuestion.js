import React from "react";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class AddQuestion extends React.Component {
    render() {
        return (
            <div className='add-question'>
                <Card style={{ width: '25rem' }}>
                    <Card.Header className="text-center">Create New Question</Card.Header>
                    <Card.Body>
                        <Card.Title>Would You Rather ...</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Complete the question</Card.Subtitle>
                        <br />
                        <Form>
                            <Form.Control className="d-grid gap-2" type="text" name="option1" id="option1" placeholder="Enter Option One Text Here" />
                            <br />
                            <p className="text-center">OR</p>
                            <Form.Control className="d-grid gap-2" type="text" name="option2" id="option2" placeholder="Enter Option Two Text Here" />
                        </Form>
                        <br />
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AddQuestion