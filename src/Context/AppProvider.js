import React, { Component } from "react";
import UserContext from "./UserContext";

export default class AppProvider extends Component {
  state = {
    user: {}
  };

  setUser = user => {
    this.setState({
      user
    });
  };

  render() {
    const { state, setUser} = this
    return (
      <UserContext.Provider value={{ ...state, setUser }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
