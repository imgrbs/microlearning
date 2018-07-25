import React, { Component, Fragment } from "react"
import { Segment, Header, Image } from "semantic-ui-react"

class NewsFeed extends Component {
  render () {
    return (
      <Fragment>
        <a href=''>
          <Segment size='large' vertical>
            <Image src={this.props.img} fluid />
            <div style={contentStyle}>
              <Header as='h2' style={{ marginBottom: "2px" }}>
                {this.props.title}
              </Header>
              <div>{this.props.content}</div>
            </div>
          </Segment>
        </a>
      </Fragment>
    )
  }
}

const contentStyle = {
  padding: "8px",
  color: "#756060"
}

export default NewsFeed
