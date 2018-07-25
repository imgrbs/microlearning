import "semantic-ui-css/semantic.min.css"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import AppProvider from "./Context/AppProvider"
import Landing from "./Components/Landing"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Pin from "./Components/Pin"
import Signup from "./Components/Signup"

class App extends Component {
  render () {
    return (
      <AppProvider>
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'>Landing</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/pin'>Pin</Link>
              </li>
              <li>
                <Link to='/signup'>Signup</Link>
              </li>
            </ul>

            <hr />

            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path='/pin' component={Pin} />
            <Route path='/signup' component={Signup} />
          </div>
        </Router>
      </AppProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
