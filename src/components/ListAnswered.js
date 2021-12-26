import React from 'react'

import { connect } from 'react-redux'

import QTeaser from './QTeaser'

class Answered extends React.Component {
    render() {
        const { answeredQs } = this.props
        console.log(answeredQs)
        return (
            
            <div>
                {answeredQs.map(q =>
                <QTeaser key={q.id} q={q}/>
                )}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const userAnswers = Object.keys(users[authedUser].answers);
    const answeredQs = Object.values(questions)
      .filter(q => userAnswers.includes(q.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    return {
        answeredQs,
    }
}

export default connect(mapStateToProps)(Answered)