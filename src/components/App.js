import React from 'react';

//import AddQuestion from './AddQuestion'
import Login from './Login';
import Main from './Main';
import Nav from './Nav';

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
        <Nav />
        {authedUser === null ? <Login /> : <Main />}
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
