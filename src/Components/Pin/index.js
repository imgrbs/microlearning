import React, { Component } from "react"
import PropTypes from "prop-types"
import { Container, Header, Input, Form, Button } from "semantic-ui-react"

export default class Pin extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render () {
    return <Container textAlign='center'>
      <Header as='h1'>Add Classroom</Header>
      <Form>
        <Form.Field>
          <Input placeholder='Pin...' required />
        </Form.Field>
        <Button type='submit' primary>Join Classroom</Button>
      </Form>
    </Container>
  }
}
