import React, { Component } from "react"
import _ from "lodash"
import moment from "moment"
import { Link } from "react-router-dom"
import { Container, Header, List, Segment } from "semantic-ui-react"
import { WithUserConsumer } from "../../Context/UserContext"
import firebase from "../../Tools/firebase"

const ListGenerator = ({ list }) => (
  <List divided relaxed>
    {list.map(({ activityId, icon, header, description }) => (
      <List.Item key={activityId} as={Link} to={`/activity/${activityId}`}>
        <List.Icon name={icon} size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>{header}</List.Header>
          <List.Description>{description}</List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

ListGenerator.defaultProps = {
  list: []
}

export default WithUserConsumer(
  class extends Component {
    state = {
      newList: [],
      beginnerList: [],
      intermediateList: []
    }

    componentDidMount () {
      this.loadActivities()
    }

    loadActivities = async () => {
      const rawActivityList = await firebase
        .database()
        .ref("activities")
        .orderByChild("createdAt")
        .once("value")
      const activityList = Object.entries(rawActivityList.val()).map(entity => ({
        ...entity[1],
        activityId: entity[0],
        icon: entity[1].icon,
        header: entity[1].title,
        description: moment(entity[1].createdAt).fromNow()
      }))
      const joinedClass = this.props.user.joinedClass
        ? Object.values(this.props.user.joinedClass)
        : []
      const filteredList = activityList.filter(activity =>
        _.find(joinedClass, { classId: activity.belongTo })
      )
      const newActivityList = filteredList.filter(
        activity => moment.duration(moment().diff(moment(activity.createdAt))).asDays() < 3
      )
      const groupActivity = _.groupBy(filteredList, "level")
      this.setState({
        newList: newActivityList,
        beginnerList: groupActivity.beginner,
        intermediateList: groupActivity.intermediate
      })
    }

    render () {
      return (
        <Container>
          <Segment>
            <Header as='h1'>New</Header>
            <ListGenerator list={this.state.newList} />
          </Segment>
          <Segment>
            <Header as='h1'>Level 1 : Beginner</Header>
            <ListGenerator list={this.state.beginnerList} />
          </Segment>
          <Segment>
            <Header as='h1'>Level 2 : Intermediate</Header>
            <ListGenerator list={this.state.intermediateList} />
          </Segment>
        </Container>
      )
    }
  }
)
