import React from "react";

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Container>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/questions" active>Unanswered Questions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/questions">Answered Questions</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
        )
    }
}

export default Main