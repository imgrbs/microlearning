import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container, Header, Message, Button, TextArea as DefaultTextArea } from "semantic-ui-react"

const TextArea = styled(DefaultTextArea)`
  min-height: 300px;
  width: 100%;
  margin: 0;

  -webkit-appearance: none;
  tap-highlight-color: rgba(255,255,255,0);
  padding: .78571429em 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  outline: 0;
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  -webkit-box-shadow: 0 0 0 0 transparent inset;
  box-shadow: 0 0 0 0 transparent inset;
  -webkit-transition: color .1s ease,border-color .1s ease;
  transition: color .1s ease,border-color .1s ease;
  font-size: 1em;
  line-height: 1.2857;
  resize: vertical;
`

export default class Challenge extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    isStart: false
  }

  handleStart = () => {
    this.setState({ isStart: true })
  }

  render () {
    const { isStart } = this.state
    return (
      <Container>
        <Header as='h1'>Level 1 : Beginner</Header>
        <Message>
          <Message.Header>
            Question
          </Message.Header>
          <p>
            Freemium direct mailing stealth. Venture partnership handshake partner network channels. Beta ownership freemium funding hypotheses partnership vesting period android release. Investor responsive web design graphical user interface stealth paradigm shift crowdsource freemium product management entrepreneur agile development. Alpha series A financing business model canvas android niche market focus social proof accelerator. Prototype handshake gen-z user experience twitter seed money buyer. Crowdsource social proof marketing hypotheses. Backing gen-z venture sales network effects ramen pitch. Responsive web design ecosystem graphical user interface ownership startup influencer metrics investor angel investor creative focus research & development alpha MVP. First mover advantage interaction design deployment advisor user experience.
          </p>
        </Message>
        {
          !isStart
            ? <Button secondary onClick={this.handleStart}>Start Activity</Button>
            : (
              <Fragment>
                <Message info>
                  <Message.Header>
                    Timer: 7 days left.
                  </Message.Header>
                </Message>
                <TextArea placeholder='Answer Here...' />
                <Button primary>Submit Answer</Button>
              </Fragment>
            )
        }

      </Container>
    )
  }
}
