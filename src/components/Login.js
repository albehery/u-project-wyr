import React from "react";
import { connect } from "react-redux";

import { setAuthedUser } from '../actions/authedUser'

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

class Login extends React.Component {

    handleLogin = (e) => {
        e.preventDefault()
        const userID = this.userID.value;
        const { dispatch } = this.props;
        if (userID !== '') {
            dispatch(setAuthedUser(userID))
        }
    }

    render() {
        const { users } = this.props;
        return (
            <div className="login">
                <Card style={{ width: '30rem' }}>
                    <Card.Header className="text-center" >Welcome to the Would You Rather App</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Please Sign in to continue
                        </Card.Text>
                        <Form onSubmit={this.handleLogin}>
                            <Form.Select ref={(id) => (this.userID = id)}>
                                <option value="" disabled>Select name to login</option>
                                {users.map((user) =>
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )}
                            </Form.Select>
                            <br />
                            <div className="d-grid gap-2">
                                <Button type="submit">Login</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)

