import React from "react"
import { Grid, Image, Header } from "semantic-ui-react"

const Profile = ({ firstname, lastName }) => (
  <div>
    <Grid centered>
      <Grid.Column width={6}>
        <Image
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
          circular='true'
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Header as='h1'>`Lorem` Loream</Header>
      </Grid.Column>
    </Grid>
    <Grid centered>
      <Grid.Column width={12}>
        <Header>Level 1: Beginner</Header>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy
        </p>
      </Grid.Column>
    </Grid>
  </div>
)

export default Profile
