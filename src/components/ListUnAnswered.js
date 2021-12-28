import React from 'react'

import { connect } from 'react-redux'

import Teaser from './Teaser'

class Unanswered extends React.Component {
    render() {
        const { unansweredQs} = this.props
        console.log(unansweredQs)
        return (
            
            <div>
                {unansweredQs.map(q =>
                <Teaser key={q.id} q={q} />
                )}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const userAnswers = Object.keys(users[authedUser].answers);
    const unansweredQs = Object.values(questions)
      .filter(q => !userAnswers.includes(q.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    return {
        unansweredQs,
    }
}

export default connect(mapStateToProps)(Unanswered)