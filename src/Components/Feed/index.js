import React, { Component, Fragment } from "react"
import { Segment, Header, Image } from "semantic-ui-react"

class NewsFeed extends Component {
  render () {
    const { img, title, content } = this.prop
    return (
      <Fragment>
        <a href=''>
          <Segment size='large' vertical>
            <div
              style={{
                height: "200px",
                width: "100%",
                backgroundImage: `'url(${img})'`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginBottom: "10px"
              }}
              fluid
            />
            <div style={contentStyle}>
              <Header as='h2' style={{ marginBottom: "2px" }}>
                {title}
              </Header>
              <div>{content}</div>
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
