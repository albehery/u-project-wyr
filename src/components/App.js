import React from 'react';
import AddQuestion from './AddQuestion'

import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'


class App extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
      app 
      <AddQuestion />        
      </div>
    )
  }
}

export default connect(null,{handleInitialData})(App)
