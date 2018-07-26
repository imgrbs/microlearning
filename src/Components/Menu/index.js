import React, { Component, Fragment } from "react"
import _ from "lodash"
import { withRouter } from "react-router"
import { Menu, Modal, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { WithUserConsumer } from "../../Context/UserContext"
import firebase from "../../Tools/firebase"
import SignUp from "../Signup"
import Login from "../Login"
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

class SkooldioMenu extends Component {
    state = {
      open: false,
      content: false
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  signOut () {
    firebase.auth().signOut()
    window.location.replace("/")
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
            <Header as='h1'> Join with Us.</Header>
            <p>
              {"Already have an Account ? "}
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
            <Header as='h1'> Welcome to Skooldio Microlearning.</Header>
            <p>
              {"No Account ? "}
              <span className='link' onClick={this.handleEach}>
                Create Your Account.
              </span>
            </p>
            <Login closeModal={this.handleModal} />
          </Modal.Description>
        </Modal.Content>
      )
    }
    return (
      <Fragment>
        <Menu widths='eight' style={menuStyle}>
          {
            menus.map(({name, to}) => (
              <Menu.Item
                key={name}
                name={name}
                as={Link}
                to={to}
                active={activeItem === {name}}
                onClick={this.handleItemClick}
              >
                {name}
              </Menu.Item>
            ))
          }
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
      </Fragment>
    )
  }
}

const menuStyle = {
  border: "0px",
  boxShadow: "none"
}

export default withRouter(WithUserConsumer(SkooldioMenu))
