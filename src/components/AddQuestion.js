import React from "react";

import { connect } from 'react-redux'

import { Navigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


import { handleSaveQuestion } from "../actions/questions";

class AddQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        navigate: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        const { optionOne, optionTwo } = this.state
        this.setState({navigate:true})

        if (optionOne && optionTwo) {
            dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser))
            console.log('done')
        }
    }

    render() {

        const { optionOne, optionTwo, navigate } = this.state;
        return (
            <div className='add-question'>
                {navigate === true && (<Navigate to='/' />)}
                <Card style={{ width: '40rem' }}>
                    <Card.Header className="text-center">Create New Question</Card.Header>
                    <Card.Body>
                        <Card.Title>Would You Rather ...</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Complete the question</Card.Subtitle>
                        <br />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control className="d-grid gap-2" type="text" name="optionOne" id="optionOne" placeholder="Enter Option One Text Here" onChange={this.handleChange} />
                            <br />
                            <p className="text-center">OR</p>
                            <Form.Control className="d-grid gap-2" type="text" name="optionTwo" id="optionTwo" placeholder="Enter Option Two Text Here" onChange={this.handleChange} />
                            <br />
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" disabled={optionOne === '' || optionTwo === ''}>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(AddQuestion);