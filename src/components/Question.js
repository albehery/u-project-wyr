import React from "react";

import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


import { handleSaveQuestionAnswer } from '../actions/questions'

class Question extends React.Component {
    state = {
        answer: ''
    }

    handleChange = (e) => {
        this.setState({ answer: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser, qid } = this.props
        const answer = e.target.vote.value
        console.log(answer)
        if (answer && answer !== ''){
            dispatch(handleSaveQuestionAnswer(authedUser, qid, answer))
            console.log('done')
        }
    }

    render() {
        const { questions, users, qid } = this.props
        const question = questions[qid]
        const { answer } = this.state
        return (
            <div className="Main">
                <Card style={{ width: '30rem' }}>
                    <Card.Header>{users[question.author].name} asks:</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm="4">
                                    <div className="left">
                                        <Image src={users[question.author].avatarURL} roundedCircle alt="" style={{ width: '100px' }} />
                                    </div>
                                </Col>
                                <Col sm="8">
                                    <Card.Title>Would You Rather ... </Card.Title>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Check
                                            inline
                                            label={question.optionOne.text}
                                            value="optionOne"
                                            name="vote"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        <br />
                                        <Form.Check
                                            inline
                                            label={question.optionTwo.text}
                                            value="optionTwo"
                                            name="vote"
                                            type="radio"
                                            onChange={this.handleChange}
                                        />
                                        <div className="d-grid gap-2">
                                            <Button type="submit" variant="primary" disabled={answer === ''}>Submit</Button>
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


function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Question)