import React, { Component } from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Menu widths='eight' style={menuStyle}>
        <Menu.Item
          name='Home'
          as={Link}
          to='/'
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='login'
          as={Link}
          to='/login'
          active={activeItem === "login"}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
        <Menu.Item
          name='activity'
          as={Link}
          to='/activity'
          active={activeItem === "activity"}
          onClick={this.handleItemClick}
        >
          Activity
        </Menu.Item>
        <Menu.Item
          name='profile'
          as={Link}
          to='/profile'
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          name='pin'
          as={Link}
          to='/pin'
          active={activeItem === "pin"}
          onClick={this.handleItemClick}
        >
          Pin
        </Menu.Item>
        <Menu.Item
          name='signup'
          as={Link}
          to='/signup'
          active={activeItem === "signup"}
          onClick={this.handleItemClick}
        >
          Sign up
        </Menu.Item>
      </Menu>
    )
  }
}

const menuStyle = {
  border: "0px",
  boxShadow: "none"
}
