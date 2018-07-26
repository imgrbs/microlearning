import React from "react"
import { Header, Container, Image } from "semantic-ui-react"

const Notfound = () => {
  return (
    <Container textAlign='center'>
      <Header as='h1'>404 Page not found</Header>
      <Image
        src='https://lineartotaku.files.wordpress.com/2015/11/elizabeth1.png'
        size='medium'
        verticalAlign='middle'
      />
    </Container>
  )
}

export default Notfound
