import React from "react";

import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Alert from 'react-bootstrap/Alert'
// import Badge from 'react-bootstrap/Badge'

class QuestionResult extends React.Component {
    render() {
        const { q, users } = this.props
        return (
            <div className="Main">
                <Card style={{ width: '40rem' }}>
                    <Card.Header>Asked by {users[q.author].name}</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm="4" className="align-items-center">
                                    <div className="left">
                                        <Image src={users[q.author].avatarURL} className="align-middle" roundedCircle alt="" />
                                    </div>
                                </Col>
                                <Col sm="8">
                                    <Card.Title>Results:</Card.Title>
                                    <Alert variant="success">
                                        <p>
                                            {q.optionOne.text}
                                        </p>
                                        
                                        <ProgressBar variant="success" now={66.7} label="66.7" />
                                    </Alert>
                                    <Alert variant="success">
                                        <p>{q.optionTwo.text}</p>
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

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionResult)