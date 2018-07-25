import React, { Component } from "react"

export const users = {
  user: {},
  setUser: user => {}
}

const UserContext = React.createContext(users)

export const UserConsumer = UserContext.Consumer
export const WithUserConsumer = WrappedComponent =>
  class extends Component {
    render () {
      return (
        <UserContext.Consumer>
          {value => <WrappedComponent {...value} {...this.props} />}
        </UserContext.Consumer>
      )
    }
  }

export const UserProvider = UserContext.Provider
