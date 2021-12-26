import React from "react"
import { Link } from 'react-router-dom'
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
                    <Navbar.Brand className="nav-link">WYR</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/add" className="nav-link">Add Question</Link>
                        <Link to="/leaderboard" className="nav-link">leaderboard</Link>
                    </Nav>
                    {authedUser &&
                        <Navbar.Text>
                            Hello, {users[authedUser].name}
                            &nbsp;
                            <img
                                src={users[authedUser].avatarURL}
                                alt={users[authedUser].name + 'user avatar'}
                                style={{ height: 40 + 'px' }}
                            />
                            &nbsp;
                            <a href="/">Logout</a>
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