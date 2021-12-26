import React from "react";
import Card from "react-bootstrap/esm/Card";

import { connect } from 'react-redux'

class Leaderboard extends React.Component {
    render() {
        const { usersLead } = this.props;
        console.log(usersLead)
        return (
                usersLead.map(user => (
                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Text>
                                {user.name}
                            </Card.Text>
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
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);
    return {
        usersLead,
    }
}

export default connect(mapStateToProps)(Leaderboard)