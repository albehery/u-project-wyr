import React from 'react'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'

class Leaderboard extends React.Component {
    render() {
        const { users } = this.props;
        const usersLead = Object.values(users)
        .map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answeredCount: Object.values(user.answers).length,
            createdCount: user.questions.length,
            score: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)

        console.log(usersLead)
        return (
            usersLead.map(user => (
                <Card style={{ width: '40rem', margin: '1rem auto' }} key={user.id}>
                    <Card.Body>
                        <Row>
                            <Col xs={3} className="left">
                            <Image src={user.avatarURL} style={{width:'100px'}}/>
                            </Col>
                            <Col xs={6} className="left">
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>Answered Questions: {user.answeredCount}</Card.Text>
                                <Card.Text>Created Questions: {user.createdCount}</Card.Text>
                            </Col>
                            <Col xs={3}>
                                <Card.Text>
                                    Score: {user.score}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Leaderboard)