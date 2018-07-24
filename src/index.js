import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Landing from './Components/Landing'

class App extends Component {
  render() {
    return (
      <Landing />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
