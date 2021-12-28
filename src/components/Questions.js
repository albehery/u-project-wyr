import React from "react";

import { useParams } from 'react-router-dom'

import { connect } from 'react-redux'

import Question from './Question'
import Result from './Result'


function Questions(props) {
    const qid = useParams().qid
    const {users, authedUser } = props
    
    return(
        Object.keys(users[authedUser].answers).includes(qid)?
        <Result qid={qid} />
        :
        <Question qid={qid} />
    )
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Questions)