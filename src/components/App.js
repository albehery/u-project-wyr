import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddQuestion from './AddQuestion'
import Login from './Login'
import Navigation from './Navigation'
import Leaderboard from './Leaderboard'
import Question from './Question'
import Main from './Main'
import NotFound from './NotFound'

import Container from 'react-bootstrap/Container'

import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'



class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    const { authedUser } = this.props
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Container style={{margin:'1rem auto', width:'42rem'}}>
            {
              authedUser === null ?
                <Routes>
                  <Route path="*" element={<Login />} />
                </Routes>
                :
                <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route path="/add" element={<AddQuestion />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/questions/:qid" element={<Question />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
            }
          </Container>
        </BrowserRouter>
      </div>
    )
  }
}


function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps, { handleInitialData })(App)
