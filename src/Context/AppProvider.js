import React, { Component } from "react"
import _ from "lodash"
import { UserProvider } from "./UserContext"
import firebase from "../Tools/firebase"

export default class AppProvider extends Component {
  constructor () {
    super()
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      this.setState({
        user: _.pick(user, [
          "displayName",
          "email",
          "emailVerified",
          "photoURL",
          "isAnonymous",
          "uid",
          "providerData"
        ])
      })
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
    return (
      <UserProvider value={{ ...state, setUser }}>
        {this.props.children}
      </UserProvider>
    )
  }
}
