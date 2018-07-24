import React from "react"
import { Grid, Image, Header } from "semantic-ui-react"

const Profile = ({ firstname, lastName }) => (
  <Grid centered>
    <Grid.Column width={6}>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' circular='true' />
    </Grid.Column>
    <Grid.Column width={5}>
      <Header as='h1'>`Lorem` Loream</Header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard
      </p>
    </Grid.Column>
  </Grid>
)

export default Profile
