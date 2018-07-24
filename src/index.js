import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Landing from './Components/Landing'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Signup from './Components/Signup'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
    
          <hr />
    
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
