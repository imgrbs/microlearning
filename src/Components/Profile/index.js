import React, { Component, Fragment } from "react"
import { Container, Grid, Image, Header, Card, Message } from "semantic-ui-react"
import firebase from "../../Tools/firebase"
import { WithUserConsumer } from "../../Context/UserContext"

const Activity = ({ activities }) => (
  <Fragment>
    {
      (activities.length > 0)
        ? activities.map(({ activityId, header, description }) => (
          <Card fluid key={activityId}>
            <Card.Content>
              <Header>{header}</Header>
              <p>{description} </p>
            </Card.Content>
          </Card>
        ))
        : <Message warning>ไม่มีกิจกรรม</Message>
    }
  </Fragment>
)

Activity.defaultProps = {
  activities: [
    {
      header: "Level 1: Beginner",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      header: "Level 1: Beginner",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      header: "Level 1: Beginner",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    },
    {
      header: "Level 1: Beginner",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    }
  ]
}

class Profile extends Component {
  state = {
    activeActivity: [],
    completedActivity: []
  }

  componentDidMount () {
    this.loadActivity()
  }

  loadActivity = async () => {
    const rawUserData = await firebase
      .database()
      .ref("users/" + this.props.user.uid)
      .once("value")
    const userData = rawUserData.val() || {}
    const activeActivity = userData.activeActivity || {}
    const completedActivity = userData.completedActivity || {}
    this.setState({
      activeActivity: Object.entries(activeActivity).map(act => ({
        ...act[1],
        activityId: act[0],
        header: act[1].title,
        description: "level " + act[1].level
      })),
      completedActivity: Object.entries(completedActivity).map(act => ({
        ...act[1],
        activityId: act[0],
        header: act[1].title,
        description: "level " + act[1].level
      }))
    })
  }

  render () {
    return (
      <Fragment>
        <Container>
          <Grid centered>
            <Grid.Column computer={6} mobile={16}>
              <Card fluid>
                <Image
                  size='huge'
                  src={
                    this.props.user.photoURL ||
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png"
                  }
                />
                <Card.Content>
                  <Card.Header textAlign='center'>
                    {this.props.user.displayName || "Guest"}
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column computer={10} mobile={16} textAlign>
              <Header>Active Activity</Header>
              <Activity activities={this.state.activeActivity} />
              <Header>Completed Activity</Header>
              <Activity activities={this.state.completedActivity} />
            </Grid.Column>{" "}
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default WithUserConsumer(Profile)
