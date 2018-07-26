import React, { Component, Fragment } from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./menu.css"
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
            name='activity'
            as={Link}
            to='/activity'
            active={activeItem === "activity"}
            onClick={this.handleItemClick}
          >
            Activity
          </Menu.Item>
          <Menu.Item
            name='classroom'
            as={Link}
            to='/classroom'
            active={activeItem === "classroom"}
            onClick={this.handleItemClick}
          >
            Classroom
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
