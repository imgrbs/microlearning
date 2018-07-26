import React, { Component, Fragment } from "react"
import { Segment, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"

class NewsFeed extends Component {
  render () {
    const { img, title, content, newsId } = this.props
    return (
      <Fragment>
        <Link to={{ pathname: `/feed/${newsId}`, state: this.props }}>
          <Segment size='large' vertical>
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "69% 50%",
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
        </Link>
      </Fragment>
    )
  }
}

const contentStyle = {
  padding: "8px",
  color: "#756060"
}

export default NewsFeed
