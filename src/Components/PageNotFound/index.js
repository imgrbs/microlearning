import React from "react"
import { Header, Container, Image, Button } from "semantic-ui-react"

const Notfound = () => {
  return (
    <Container style={{padding: "5em"}} textAlign='center'>
      <Header as='h1'>404 Page not found</Header>
      <br />
      <Image
        src='https://assets.skooldio.com/static/landing/images/doggo_600x600.gif'
        size='medium'
        verticalAlign='middle'
        style={{marginBottom: "3em"}}
      />
      <br />
      <Button as='a' href='/' color='yellow' >Back to Home</Button>
    </Container>
  )
}

export default Notfound
