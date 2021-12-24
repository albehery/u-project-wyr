import React from "react";

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'

class Question extends React.Component {
    render() {
        return (
            <div className="Main">
                <Card style={{ width: '30rem' }}>
                    <Card.Header>Asked by user name</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm="4" className="align-items-center">
                                    <div className="left">
                                        <Image src="users/1.png" className="align-middle" roundedCircle alt="" />
                                    </div>
                                </Col>
                                <Col sm="8">
                                    <Card.Title>Results:</Card.Title>
                                    <Alert variant="success">
                                        <p>Would you rather option one<Badge bg="warning" text="dark" className="">Your Vote</Badge></p>
                                        
                                        <ProgressBar variant="success" now={66.7} label="66.7" />
                                    </Alert>
                                    <Alert variant="info">
                                        <p>Would you rather option two</p>
                                        <ProgressBar variant="success" now={33.3} label="33.3" />
                                    </Alert>
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