import React from "react"
import { Button, Form, TextArea, Container, Header } from "semantic-ui-react"

const SignUpForm = () => (
  <div>
    <Container>
      <Header as='h2'>Login</Header>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' type='email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' type='password' />
        </Form.Field>
        <Form.Field>
          <label>First name</label>
          <input placeholder='First name' type='text' />
        </Form.Field>
        <Form.Field>
          <label>Last name</label>
          <input placeholder='Last name' type='text' />
        </Form.Field>
        <Form.Field>
          <TextArea placeholder='Tell us more' />
        </Form.Field>
        <Button type='submit'>Sign up</Button>
      </Form>
    </Container>
  </div>
)

export default SignUpForm
