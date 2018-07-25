import React, { Component } from "react"
import PropTypes from "prop-types"
import { Container, Header, List, Segment } from "semantic-ui-react"

const ListGenerater = ({ list }) => (
  <List divided relaxed>
    {list.map(({ icon, header, description }) => (
      <List.Item>
        <List.Icon name={icon} size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>{header}</List.Header>
          <List.Description as='a'>{description}</List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

ListGenerater.defaultProps = {
  list: [
    {
      icon: "github",
      header: "Semantic-Org/Semantic-UI",
      description: "Updated 10 mins ago"
    }
  ]
}

export default class Activity extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render () {
    return (
      <Container>
        <Segment>
          <Header as='h1'>New</Header>
          <ListGenerater />
        </Segment>
        <Segment>
          <Header as='h1'>Level 1 : Beginner</Header>
          <ListGenerater />
        </Segment>
        <Segment>
          <Header as='h1'>Level 2 : Intermediate</Header>
          <ListGenerater />
        </Segment>
      </Container>
    )
  }
}
