import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import moment from "moment"
import { Container, Header, Message, Button, TextArea as DefaultTextArea } from "semantic-ui-react"
import firebase from "../../Tools/firebase"
import { WithUserConsumer } from "../../Context/UserContext"

const TextArea = styled(DefaultTextArea)`
  min-height: 300px;
  width: 100%;
  margin: 0;

  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  padding: 0.78571429em 1em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  outline: 0;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0 0 0 0 transparent inset;
  box-shadow: 0 0 0 0 transparent inset;
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
  font-size: 1em;
  line-height: 1.2857;
  resize: vertical;
`

export default WithUserConsumer(
  class extends Component {
    static propTypes = {
      prop: PropTypes
    }

    state = {
      activity: {},
      userActivity: null,
      timeLeft: null,
      interval: null,
      answer: "",
      isEnd: false
    }

    componentDidMount () {
      this.loadActivity()
    }

    async loadActivity () {
      const activityId = this.props.match.params.id
      const rawActivity = await firebase
        .database()
        .ref("activities/" + activityId)
        .once("value")
      const activity = rawActivity.val() || {}

      const rawUserActivity = await firebase
        .database()
        .ref("users/" + this.props.user.uid + "/activeActivity/" + activityId)
        .once("value")
      const userActivity = rawUserActivity.val()

      if (userActivity) {
        this.addInterval(userActivity.end)
      }

      this.setState({ activity, userActivity })
    }

    handleSubmitAnswer = async () => {
      const activityId = this.props.match.params.id
      await firebase
        .database()
        .ref("users/" + this.props.user.uid + "/completedActivity/")
        .push()
        .set({
          activityId,
          ...this.state.activity,
          start: this.state.userActivity.start,
          end: moment().format(),
          userAnswer: this.state.answer
        })
      await firebase
        .database()
        .ref("users/" + this.props.user.uid + "/activeActivity/" + activityId)
        .remove()
      this.setState({ isEnd: true })
    }

    handleStart = async () => {
      const activityId = this.props.match.params.id
      try {
        const startTime = moment()
        const userActivity = {
          ...this.state.activity,
          start: startTime.format(),
          end: startTime.add(moment.duration(this.state.activity.duration)).format()
        }
        await firebase
          .database()
          .ref("users/" + this.props.user.uid + "/activeActivity/" + activityId)
          .set(userActivity)
        this.addInterval(userActivity.end)
        this.setState({ userActivity })
      } catch (e) {
        console.error(e)
      }
    }

    addInterval = endTime => {
      const timeLeft = moment.duration(moment(endTime).diff(moment()))
      const interval = setInterval(() => {
        const timeLeft = this.state.timeLeft.subtract(1, "seconds")
        if (timeLeft.asSeconds() >= 0) {
          this.setState({ timeLeft })
        } else {
          this.state.interval.clear()
        }
      }, 1000)
      this.setState({ interval, timeLeft })
    }

    handleAnswerText = e => {
      this.setState({ answer: e.target.value })
    }

    getTimeLeft = () => {
      const { timeLeft } = this.state
      return `${timeLeft.hours()}:${timeLeft.minutes()}:${timeLeft.seconds()}`
    }

    render () {
      const isStart = !this.state.userActivity
      const { isEnd } = this.state
      const isAnswering = !isStart && !isEnd
      return (
        <Container>
          <Header as='h1'>{this.state.activity.title}</Header>
          <Message>
            <Message.Header>Level: {this.state.activity.level}</Message.Header>
            <p>{this.state.activity.content}</p>
          </Message>
          {isStart && (
            <Button secondary onClick={this.handleStart}>
              Start Activity
            </Button>
          )}
          {isAnswering && (
            <Fragment>
              <Message info>
                <Message.Header>Timer: {this.getTimeLeft()} left.</Message.Header>
              </Message>
              <TextArea
                placeholder='Answer Here...'
                onChange={this.handleAnswerText}
                value={this.state.answer}
              />
              <Button primary onClick={this.handleSubmitAnswer}>
                Submit Answer
              </Button>
            </Fragment>
          )}
          {isEnd && (
            <Fragment>
              Solution
              <TextArea value={this.state.activity.answer} />
            </Fragment>
          )}
        </Container>
      )
    }
  }
)
