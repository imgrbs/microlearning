import "semantic-ui-css/semantic.min.css"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import AppProvider from "./Context/AppProvider"
import Landing from "./Components/Landing"
import Login from "./Components/Login"
import Activity from "./Components/Activity"
import Challenge from "./Components/Activity/Challenge"
import Profile from "./Components/Profile"
import Pin from "./Components/Pin"
import Signup from "./Components/Signup"
import Menu from "./Components/Menu"
import Logo from "./Components/Logo"
import Article from "./Components/Feed/Article"
import Footer from "./Components/Footer"
import NotFound from "./Components/PageNotFound"
class App extends Component {
  render () {
    return (
      <AppProvider>
        <Router>
          <div>
            <Logo />
            <Menu />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/feed/:newsId' component={Article} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/activity' component={Activity} />
              <Route path='/activity/:id' component={Challenge} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/classroom' component={Pin} />
              <Route exact path='/signup' component={Signup} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
