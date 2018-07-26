import React, { Component } from "react"
import _ from "lodash"
import {
  Image,
  Grid,
  Container as defaultContainer,
  Modal,
  Header,
  Button as defaultButton
} from "semantic-ui-react"
import styled from "styled-components"
import { withRouter } from "react-router"
import { WithUserConsumer } from "../../Context/UserContext"
import firebase from "../../Tools/firebase"
import SignUp from "../Signup"
import Login from "../Login"

const Container = styled(defaultContainer)`
  margin-top: 30px;
`
const Button = styled(defaultButton)`
  color: red;
`

export default WithUserConsumer(
  withRouter(
    class extends Component {
      state = {
        open: false,
        content: false
      }

      signOut = () => {
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
        const { open, content } = this.state
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
          <Container>
            <Grid stretched>
              <Grid.Column computer={13} mobile={8}>
                <Image
                  src='https://assets.skooldio.com/logo/skooldio_logo_current.png'
                  size='small'
                />
              </Grid.Column>

              <Grid.Column computer={3} mobile={8}>
                {isLogin ? (
                  <Button onClick={this.handleModal}>Get start</Button>
                ) : (
                  <Button onClick={this.signOut}>{this.props.user.displayName}</Button>
                )}{" "}
              </Grid.Column>
            </Grid>
            <Modal open={open} onClose={this.handleModal} closeIcon>
              {modelContent}
            </Modal>
          </Container>
        )
      }
    }
  )
)
