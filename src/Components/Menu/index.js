import React, { Component } from "react"
import { Menu, Container } from "semantic-ui-react"

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu widths='eight'>
          <Menu.Item name='Home' active={activeItem === "Home"} onClick={this.handleItemClick}>
            Home
          </Menu.Item>
          <Menu.Item
            name='Boookmark'
            active={activeItem === "Boookmark"}
            onClick={this.handleItemClick}
          >
            Boookmark
          </Menu.Item>
          <Menu.Item
            name='Practice'
            active={activeItem === "Practice"}
            onClick={this.handleItemClick}
          >
            Practice
          </Menu.Item>
          <Menu.Item
            name='Profile'
            active={activeItem === "Profile"}
            onClick={this.handleItemClick}
          >
            Profile
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
