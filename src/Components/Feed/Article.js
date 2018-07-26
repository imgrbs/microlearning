import React, { Component } from "react"
import styled from "styled-components"
import {
  Header,
  Container,
  Image as DefaultImage,
  Segment as DefaultSegment
} from "semantic-ui-react"
import firebase from "../../Tools/firebase"
import NotFound from "../PageNotFound"

const Image = styled(DefaultImage)`
  margin: 2em 0 1em 0 !important;
`

const Segment = styled(DefaultSegment)`
  font-size: 1.4em !important;
  letter-spacing: 0.6px !important;
  line-height: 1.3em !important;
  margin: 2em 0 !important;
`

export default class Article extends Component {
  state = {
    isNotFound: false
  }

  componentDidMount () {
    if (this.props.location.state) {
      this.setState(this.props.location.state)
    } else {
      this.loadArticle()
    }
  }

  async loadArticle () {
    const articleId = this.props.match.params.newsId
    const raw = await firebase
      .database()
      .ref("news/" + articleId)
      .once("value")
    const article = raw.val()
    if (article) {
      this.setState(article)
    } else {
      this.setState({ isNotFound: true })
    }
  }

  render () {
    const { content, img, title, isNotFound } = this.state
    return (
      <Container>
        <Image fluid centered src={img} />
        <Segment>
          {isNotFound && <NotFound />}

          <Header as='h1'>{title}</Header>
          <p>{content}</p>
        </Segment>
      </Container>
    )
  }
}
