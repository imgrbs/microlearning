import React, { Component, Fragment } from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./menu.css"

const menus = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Activity",
    to: "/activity"
  },
  {
    name: "Classroom",
    to: "/classroom"
  },
  {
    name: "Profile",
    to: "/profile"
  }
]
class Menubar extends Component {
  state = {
    activeItem: ""
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Fragment>
        <Menu widths='eight' style={menuStyle}>
          {menus.map(({ name, to }) => (
            <Menu.Item
              key={name}
              name={name}
              as={Link}
              to={to}
              active={activeItem === { name }}
              onClick={this.handleItemClick}
            >
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Fragment>
    )
  }
}

const menuStyle = {
  border: "0px",
  boxShadow: "none"
}

export default Menubar
