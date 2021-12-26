import React from "react";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListAnswered from './ListAnswered'
import ListUnanswered from './ListUnanswered'



class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Tabs fill defaultActiveKey="Unanswered" style={{width:'40rem'}} >
                    <Tab eventKey="Unanswered" title="Unanswered Questions">
                        <ListUnanswered />
                    </Tab>
                    <Tab eventKey="Answered" title="Answered Questions">
                        <ListAnswered />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Main