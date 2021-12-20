import React from 'react';

//import AddQuestion from './AddQuestion'
import Login from './Login';

import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'


class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    const { authedUser } = this.props
    return (
      authedUser === null ? <Login /> : <main />
    )
  }
}


function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps, { handleInitialData })(App)
