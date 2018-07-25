import React, { Component } from "react"
import { Segment, Header, Grid, Container } from "semantic-ui-react"

class NewsFeed extends Component {
  render () {
    return (
      <Container>
        <Grid>
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
        </Grid>
      </Container>
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
