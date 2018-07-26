import React, { Component } from "react"
import _ from "lodash"
import { Menu, Modal, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { WithUserConsumer } from "../../Context/UserContext"
import firebase from "../../Tools/firebase"
import SignUp from "../Signup"
import Login from "../Login"
import "./menu.css"
export default WithUserConsumer(
  class extends Component {
    state = {
      open: false,
      content: false
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    signOut () {
      firebase.auth().signOut()
      this.props.history.push("/")
    }

    handleModal = () => {
      this.setState((prevState, props) => ({
        open: !prevState.open
      }))
    }
    handleEach = () => {
      this.setState((prevState, props) => ({
        content: !prevState.content
      }))
    }
    render () {
      const isLogin = _.isEmpty(this.props.user)
      const { activeItem, open, content } = this.state
      let modelContent
      if (content) {
        modelContent = (
          <Modal.Content>
            <Modal.Description>
              <Header as='h1'> Join us</Header>
              <p>
                Already have an account?{" "}
                <span className='link' onClick={this.handleEach}>
                  Sign in
                </span>
              </p>
              <SignUp closeModal={this.handleModal} />
            </Modal.Description>
          </Modal.Content>
        )
      } else {
        modelContent = (
          <Modal.Content>
            <Modal.Description>
              <Header as='h1'> Welcome back</Header>
              <p>
                No account?{" "}
                <span className='link' onClick={this.handleEach}>
                  Create one
                </span>
              </p>
              <Login closeModal={this.handleModal} />
            </Modal.Description>
          </Modal.Content>
        )
      }
      return (
        <div>
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
            {isLogin ? (
              <Menu.Item onClick={this.handleModal}>
                <div className='signBtn'>Get Start</div>
              </Menu.Item>
            ) : (
              <Menu.Item onClick={this.signOut}>
                <div className='signBtn'>{this.props.user.displayName || "Guest"}</div>
              </Menu.Item>
            )}
          </Menu>

          <Modal open={open} onClose={this.handleModal} closeIcon>
            {modelContent}
          </Modal>
        </div>
      )
    }
  }
)
const menuStyle = {
  border: "0px",
  boxShadow: "none"
}
