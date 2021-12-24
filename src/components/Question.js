import React from "react";

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class Question extends React.Component {
    render() {
        return (
            <div className="Main">
                <Card style={{ width: '30rem' }}>
                    <Card.Header>users name asks:</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm="4">
                                    <div className="left">
                                        <Image src="users/1.png" roundedCircle alt="" />
                                    </div>
                                </Col>
                                <Col sm="8">
                                    <Card.Title>Would You Rather ...</Card.Title>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label="optionOne"
                                            value="optionOne"
                                            name="vote"
                                            type="radio"
                                        />
                                        <br />
                                        <Form.Check
                                            inline
                                            label="optionTwo"
                                            value="optionTwo"
                                            name="vote"
                                            type="radio"
                                        />
                                        <div className="d-grid gap-2">
                                            <Button type="submit" variant="primary">Submit</Button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Question