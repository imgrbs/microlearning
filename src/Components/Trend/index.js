import React from "react"
import { Header, Grid } from "semantic-ui-react"

import Feed from "../Feed"
const Trend = ({ title }) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={16}>
        <Header as='h1'>{title}</Header>
        <Feed />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Trend
