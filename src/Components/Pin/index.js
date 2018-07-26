import React, { Component } from "react"
import { Container, Header, Input, Form, Button } from "semantic-ui-react"
import { WithUserConsumer } from "../../Context/UserContext"
import firebase from "../../Tools/firebase"

class Pin extends Component {

  state = {
    pin: ""
  }

  handleInputPinChange = e => {
    this.setState({ pin: e.target.value })
  }

  joinClass = async () => {
    try {
      const classesRef = firebase.database().ref("classes")
      const foundClass = await classesRef
        .orderByChild("pin")
        .equalTo(this.state.pin)
        .once("value")
      const joiningClass = foundClass.val()
      if (joiningClass) {
        const joiningClassKey = Object.keys(joiningClass)[0]
        const joinedClassRef = firebase
          .database()
          .ref("users/" + this.props.user.uid + "/joinedClass")
        const alreadyJoined = await joinedClassRef
          .orderByValue()
          .equalTo(joiningClassKey)
          .once("value")
        if (!alreadyJoined.val()) {
          joinedClassRef.push().set(joiningClassKey)
          // add success
        } else {
          // already joined
        }
      } else {
        // no class has that pin
      }
    } catch (e) {}
  }

  render () {
    return (
      <Container textAlign='center'>
        <Header as='h1'>Add Classroom</Header>
        <Form>
          <Form.Field>
            <Input placeholder='Pin...' required onChange={this.handleInputPinChange} />
          </Form.Field>
          <Button type='submit' primary onClick={this.joinClass}>
            Join Classroom
          </Button>
        </Form>
      </Container>
    )
  }
}

export default WithUserConsumer(Pin)
