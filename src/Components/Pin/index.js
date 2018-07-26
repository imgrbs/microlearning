import React, { Component, Fragment } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Container, List, Header, Input, Form, Button, Segment, Message } from "semantic-ui-react"
import { WithUserConsumer } from "../../Context/UserContext"
import firebase from "../../Tools/firebase"

const ClassSengment = styled(Segment)`
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`

const ClassItem = ({ title, description }) => (
  <ClassSengment>
    <List divided relaxed>
      <List.Item>
        <List.Header textAlign='left'>{title}</List.Header>
        {description}
      </List.Item>
    </List>
  </ClassSengment>
)

const ClassList = ({ classList }) => (
  <Fragment>
    {classList.map(({ classId, title, description }) => (
      <ClassItem key={classId} title={title} description={description} />
    ))}
  </Fragment>
)

ClassList.propTypes = {
  classList: PropTypes.array
}

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
        const alreadyJoined = Object.values(this.props.user.joinedClass).find(
          item => item.classId === joiningClassKey
        )
        if (!alreadyJoined) {
          await firebase
            .database()
            .ref("users/" + this.props.user.uid + "/joinedClass")
            .push()
            .set({ ...joiningClass[joiningClassKey], classId: joiningClassKey })
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
    const classList = this.props.user.joinedClass ? Object.values(this.props.user.joinedClass) : []

    return (
      <Container textAlign='center'>
        <Segment style={{ margin: "2em auto", maxWidth: "400px" }} color='yellow'>
          <Header as='h1'>Join Classroom</Header>
          <Form>
            <Form.Field>
              <Input placeholder='Enter Pin...' required onChange={this.handleInputPinChange} />
            </Form.Field>
            <Button type='submit' color='yellow' onClick={this.joinClass}>
              Join !
            </Button>
          </Form>
        </Segment>
        <Segment style={{ minHeight: "70vh", marginBottom: "3em" }} color='yellow'>
          <Header as='h1'>Your Classroom</Header>
          <div style={{ padding: "1em 7em" }}>
            {classList.length > 0 ? (
              <ClassList classList={classList} />
            ) : (
              <Message warning>ไม่มีคลาส</Message>
            )}
          </div>
        </Segment>
      </Container>
    )
  }
}

export default WithUserConsumer(Pin)
