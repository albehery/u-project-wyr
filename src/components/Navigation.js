import React from "react"
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Navigation extends React.Component {
    render() {
        const { authedUser, users } = this.props;
        return (
            <Navbar bg="primary" variant="dark" expand="false">
                <Container>
                    <Navbar.Brand href="/">WYR</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/add">Add Question</Nav.Link>
                        <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                </Container>
                {authedUser &&
                    <Navbar.Text>
                        Hello, {users[authedUser].name} <img src={users[authedUser].avatarURL} /><Nav.Link href="/logout">Logout</Nav.Link>
                    </Navbar.Text>}
            </Navbar>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Navigation);