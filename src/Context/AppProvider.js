import React, { Component } from "react"
import _ from "lodash"
import { UserProvider } from "./UserContext"
import firebase from "../Tools/firebase"

export default class AppProvider extends Component {
  constructor () {
    super()
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        firebase
          .database()
          .ref(`users/${user.uid}`)
          .on("value", data => {
            this.setState({
              user: data.val()
            })
          })
      } else {
        if (!_.isEmpty(this.state.user)) {
          firebase
            .database()
            .ref(`users/${this.state.user.uid}`)
            .off()
        }
        this.setState({
          user: {}
        })
      }
    })
  }

  state = {
    user: {}
  }

  setUser = user => {
    this.setState({
      user
    })
  }

  render () {
    const { state, setUser } = this
    return <UserProvider value={{ ...state, setUser }}>{this.props.children}</UserProvider>
  }
}
