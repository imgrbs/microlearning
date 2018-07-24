import "semantic-ui-css/semantic.min.css"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

import AppProvider from "./Context/AppProvider"
import Landing from "./Components/Landing"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Signup from "./Components/Signup"
import Menu from "./Components/Menu"
import Logo from "./Components/Logo"
class App extends Component {
  render () {
    return (
      <AppProvider>
        <Router>
          <div>
            <Logo />
            <Menu />
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path='/signup' component={Signup} />
          </div>
        </Router>
      </AppProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
