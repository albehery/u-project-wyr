import React from "react"
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component {
    render() {
        const { authedUser, users } = this.props;
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">WYR</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/ad">Add Question</Nav.Link>
                        <Nav.Link href="/leaderboard">leaderboard</Nav.Link>
                    </Nav>
                    {authedUser &&
                        <Navbar.Text>
                            Hello, {users[authedUser].name}
                            <img
                                src={users[authedUser].avatarURL}
                                alt={users[authedUser].name + 'user avatar'}
                                style={{ height: 40 + 'px' }}
                            />
                            <a href="/logout">Logout</a>
                        </Navbar.Text>
                    }
                </Container>
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