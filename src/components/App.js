import React from 'react';

import AddQuestion from './AddQuestion'
import Login from './Login';

import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'


class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    return (
      <div>
        app
        <Login />
        <AddQuestion />
      </div>
    )
  }
}

export default connect(null, { handleInitialData })(App)
