import React from "react"
import { Segment, Header, Grid, Container } from "semantic-ui-react"

const NewsFeed = () => (
  <Container>
    <Grid>
      <a href=''>
        <Segment size='large' vertical>
          <div style={divStyle} />
          <div style={contentStyle}>
            <Header as='h2' style={{ marginBottom: "2px" }}>
              Data for Social Good
            </Header>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy
            </div>
          </div>
        </Segment>
      </a>
    </Grid>
  </Container>
)

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
