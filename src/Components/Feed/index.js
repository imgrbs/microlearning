import React, { Component, Fragment } from "react"
import { Segment, Header } from "semantic-ui-react"

class NewsFeed extends Component {
  render () {
    return (
      <Fragment>
        <a href=''>
          <Segment size='large' vertical>
            <div style={divStyle} />
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
const divStyle = {
  height: "200px",
  width: "100%",
  backgroundImage: "url(\"https://cdn-images-1.medium.com/max/800/0*osCrEA2Kx91dzZlm\")",
  backgroundPosition: "69% 50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  marginBottom: "10px"
}

const contentStyle = {
  padding: "8px",
  color: "#756060"
}

export default NewsFeed
