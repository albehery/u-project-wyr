import React from 'react'

import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class QuestionTeaser extends React.Component {
    render() {
        const { users, q } = this.props
        return (
            <div>
                <Card style={{ width: '30rem', margin:'1rem auto'}}>
                    <Card.Header>{users[q.author].name} asks:</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm="4">
                                    <div className="left">
                                        <Image src={users[q.author].avatarURL} roundedCircle alt="" style={{width:100 + 'px'}}/>
                                    </div>
                                </Col>
                                <Col sm="8">
                                    <Card.Title>Would You Rather </Card.Title>
                                    <Card.Text>
                                      ...{q.optionOne.text}...
                                    </Card.Text>

                                    <div className="d-grid gap-2">
                                        <Button variant="primary" href={'questions/' + q.id}>View Poll</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }    
}

export default connect(mapStateToProps)(QuestionTeaser)