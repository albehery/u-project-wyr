import React from 'react'

import { connect } from 'react-redux'

import Teaser from './Teaser'

class Answered extends React.Component {
    render() {
        const { answeredQs } = this.props
        console.log(answeredQs)
        return (
            
            <div>
                {answeredQs.map(q =>
                <Teaser key={q.id} q={q} answered/>
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