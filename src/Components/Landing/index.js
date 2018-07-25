import React, { Component } from "react"
import { Container } from "semantic-ui-react"

import Trend from "../Trend"
export default class Landing extends Component {
  render () {
    return (
      <Container>
        <Trend title='News' />
      </Container>
    )
  }
}
