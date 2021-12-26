import React from "react";

import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function Question(props) {
    const params = useParams();
    const qid =  params.qid
    console.log(qid)
    const { questions,users } = props
    const question = questions[qid]
        return (
            <div className="Main">
                <Card style={{ width: '30rem' }}>
                    <Card.Header>{users[question.author].name} asks:</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm="4">
                                    <div className="left">
                                        <Image src={users[question.author].avatarURL} roundedCircle alt="" style={{width:'100px'}} />
                                    </div>
                                </Col>
                                <Col sm="8">
                                    <Card.Title>Would You Rather ... </Card.Title>
                                    <Form>
                                        <Form.Check
                                            inline
                                            label={question.optionOne.text}
                                            value="optionOne"
                                            name="vote"
                                            type="radio"
                                        />
                                        <br />
                                        <Form.Check
                                            inline
                                            label={question.optionTwo.text}
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


function mapStateToProps({ users, questions }) {
    return {
        users,
        questions,
    }
}

export default connect(mapStateToProps)(Question)