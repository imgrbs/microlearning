import React, { Component } from "react"
import { Grid, Image, Header } from "semantic-ui-react"
import { WithUserConsumer } from "../../Context/UserContext"

class Profile extends Component {

  render () {
    return (
      <div>
        <Grid centered>
          <Grid.Column width={6}>
            <Image
              size='medium'
              src={
                this.props.user.photoURL ||
                "https://react.semantic-ui.com/images/avatar/large/matthew.png"
              }
              circular='true'
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h1'>{this.props.user.displayName}</Header>
          </Grid.Column>
        </Grid>
        <Grid centered>
          <Grid.Column width={12}>
            <Header>Level 1: Beginner</Header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy
            </p>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default WithUserConsumer(Profile)
