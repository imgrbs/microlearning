import React, { Component, Fragment } from "react"
import { Container, Grid, Image, Header, Card, Message } from "semantic-ui-react"
import { WithUserConsumer } from "../../Context/UserContext"

const Activity = ({ activities }) => (
  <Fragment>
    {activities.length > 0 ? (
      activities.map(({ activityId, header, description }) => (
        <Card fluid key={activityId}>
          <Card.Content>
            <Header>{header}</Header>
            <p>{description} </p>
          </Card.Content>
        </Card>
      ))
    ) : (
      <Message warning>ไม่มีกิจกรรม</Message>
    )}
  </Fragment>
)

Activity.defaultProps = {
  activities: []
}

class Profile extends Component {
  render () {
    const activeActivity = this.props.user.activeActivity
      ? Object.entries(this.props.user.activeActivity).map(act => ({
        ...act[1],
        activityId: act[0],
        header: act[1].title,
        description: "level " + act[1].level
      }))
      : []
    const completedActivity = this.props.user.completedActivity
      ? Object.entries(this.props.user.completedActivity).map(act => ({
        ...act[1],
        header: act[1].title,
        description: "level " + act[1].level
      }))
      : []
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
            <Grid.Column computer={10} mobile={16} >
              <Header>Active Activity</Header>
              <Activity activities={activeActivity} />
              <Header>Completed Activity</Header>
              <Activity activities={completedActivity} />
            </Grid.Column>{" "}
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default WithUserConsumer(Profile)
