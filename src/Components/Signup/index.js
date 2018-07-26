import React, { Component } from "react"
import { withRouter } from "react-router"
import _ from "lodash"
import { Button, Form, Container } from "semantic-ui-react"
import firebase from "../../Tools/firebase"

class SignUpForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  }

  create = async () => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
      const photoURL = `https://api.adorable.io/avatars/200/${this.state.username}.png`
      await user.updateProfile({ displayName: this.state.username, photoURL })
      await firebase
        .database()
        .ref("users/" + user.uid)
        .set(
          _.pick(user, [
            "displayName",
            "email",
            "emailVerified",
            "photoURL",
            "isAnonymous",
            "uid",
            "providerData"
          ])
        )
      if (this.props.closeModal) {
        this.props.closeModal()
      } else {
        this.props.history.push("/")
      }
    } catch (e) {
      console.error(e)
      // create fail
    }
  }

  handleInputChange = (e, field) => {
    this.setState({ [field]: e.target.value })
  }

  render () {
    return (
      <div>
        <Container>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input
                placeholder='Username'
                type='text'
                onChange={e => this.handleInputChange(e, "username")}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                placeholder='Email'
                type='email'
                onChange={e => this.handleInputChange(e, "email")}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder='Password'
                type='password'
                onChange={e => this.handleInputChange(e, "password")}
              />
            </Form.Field>
            <Form.Field>
              <label>First name</label>
              <input
                placeholder='First name'
                type='text'
                onChange={e => this.handleInputChange(e, "firstname")}
              />
            </Form.Field>
            <Form.Field>
              <label>Last name</label>
              <input
                placeholder='Last name'
                type='text'
                onChange={e => this.handleInputChange(e, "lastname")}
              />
            </Form.Field>
            <Button onClick={this.create}>Sign up</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default withRouter(SignUpForm)
