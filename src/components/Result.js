import React from "react";

import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'

function Result(props) {

    const params = useParams();
    const qid = params.qid
    const { questions, users, authedUser } = props
    const question = questions[qid]
    const optionOneVotesCount = question.optionOne.votes.length
    const optionTwoVotesCount = question.optionTwo.votes.length
    const totalVotes = optionOneVotesCount + optionTwoVotesCount
    const authedUserVote = users[authedUser].answers[qid]
    console.log(authedUserVote)
    return (
        <div className="Main">
            <Card style={{ width: '40rem' }}>
                <Card.Header>Asked by {users[question.author].name}</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col sm="4" className="align-items-center">
                                <div className="left">
                                    <Image src={users[question.author].avatarURL} className="align-middle" style={{ width: '100px' }} roundedCircle alt="" />
                                </div>
                            </Col>
                            <Col sm="8">
                                <Card.Title>Results:</Card.Title>
                                <Alert variant="success">
                                    <p> {question.optionOne.text} {authedUserVote === 'optionOne' &&   <Badge bg="warning" text="dark">Your Vote</Badge>}</p>

                                    <ProgressBar variant="success" now={((optionOneVotesCount / totalVotes) * 100).toFixed(2)} label={((optionOneVotesCount / totalVotes) * 100).toFixed(2) + '%'} />
                                    <p style={{textAlign:'center'}}>{optionOneVotesCount} out of {totalVotes} votes</p>
                                </Alert>
                                <Alert variant="success">
                                    <p> {question.optionTwo.text} {authedUserVote === 'optionTwo' &&   <Badge bg="warning" text="dark">Your Vote</Badge>}</p>
                                    <ProgressBar variant="success" now={((optionTwoVotesCount / totalVotes) * 100).toFixed(2)} label={((optionTwoVotesCount / totalVotes) * 100).toFixed(2) + '%'} />
                                    <p style={{ textAlign: 'center' }}>{optionTwoVotesCount} out of {totalVotes} votes</p>
                                </Alert>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(Result)