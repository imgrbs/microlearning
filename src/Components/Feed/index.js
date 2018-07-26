import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { Segment, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"

const ImageSection = styled.div`
    height: 250px;
    width: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 69% 50%;
    margin-bottom: 10px;
`

class NewsFeed extends Component {
  render () {
    const { img, title, content, newsId } = this.props
    return (
      <Fragment>
        <Link to={{ pathname: `/feed/${newsId}`, state: this.props }}>
          <Segment size='large' vertical>
            <ImageSection img={img} />
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
