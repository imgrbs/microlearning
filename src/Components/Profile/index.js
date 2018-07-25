import React, { Component, Fragment } from "react"
import { Container, Grid, Image, Header, Card } from "semantic-ui-react"
import firebase from "../../Tools/firebase"
import { WithUserConsumer } from "../../Context/UserContext"

const Activity = ({ activities }) => (
  <Fragment>
    {
      activities.map(({ header, description }) => (
        <Card fluid>
          <Card.Content>
            <Header>{header}</Header>
            <p>{ description} </p>
          </Card.Content>
        </Card>
      ))
    }
  </Fragment>
)

Activity.defaultProps = {
  activities: [
    {
      header: "Level 1: Beginner",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      header: "Level 1: Beginner",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      header: "Level 1: Beginner",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      header: "Level 1: Beginner",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
  ]
}

class Profile extends Component {
  render () {
    return (
      <Fragment>
        <Container>
          <Grid>
            <Grid.Column width={6}>
              <Card>
                <Image
                  size='medium'
                  src={
                    this.props.user.photoURL ||
                "https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  }
                  circular='true'
                />
                <Card.Content>
                  <Card.Header textAlign='center'>
                    {this.props.user.displayName || "Guest"}
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Active Activity</Header>
              <Activity />
              <Header>Completed Activity</Header>
              <Activity />
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default WithUserConsumer(Profile)
