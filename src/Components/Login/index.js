import React, { Component } from "react"
import { Button, Form, Container, Header } from "semantic-ui-react"
import firebase from "../../Tools/firebase"

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  }

  login = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      // login success
    } catch (e) {
      console.error(e)
      // login fail
    }
  }

  handleInputChange = (e, field) => {
    this.setState({ [field]: e.target.value })
  }

  render () {
    return (
      <Container>
        <Header as='h2'>Login</Header>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' type='email' onChange={e => this.handleInputChange(e, "email")} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' onChange={e => this.handleInputChange(e, "password")} />
          </Form.Field>
          <Button onClick={this.login}>Login</Button>
        </Form>
      </Container>
    )
  }
}

export default LoginForm
