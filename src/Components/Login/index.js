import React from "react"
import { Button, Form, Container, Header } from "semantic-ui-react"

const SignUpForm = () => (
  <Container>
    <Header as='h2'>Login</Header>
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' type='email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' type='password' />
      </Form.Field>
      <Button type='submit'>Enter</Button>
    </Form>
  </Container>
)

export default SignUpForm
