import React from 'react'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'

class Leaderboard extends React.Component {
    render() {
        const { usersLead } = this.props;
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
                                <Card.Text>Answered Questions: {user.answers}</Card.Text>
                                <Card.Text>Created Questions: {user.created}</Card.Text>
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
    const usersLead = Object.values(users)
        .map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answers: Object.values(user.answers).length,
            created: user.questions.length,
            score: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 3);
    return {
        usersLead,
    }
}

export default connect(mapStateToProps)(Leaderboard)