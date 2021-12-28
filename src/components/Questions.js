import React from "react";

import { useParams } from 'react-router-dom'

import Question from './Question'

function Questions() {
    const qid = useParams().qid
    return(
        <Question qid={qid} />
    )
}

export default Questions