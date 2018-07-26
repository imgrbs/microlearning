import React, { Component } from "react"
import { Header, Container, Image } from "semantic-ui-react"
import firebase from "../../Tools/firebase"
import NotFound from "../PageNotFound"

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
        {isNotFound && <NotFound />}
        <Header as='h1'>{title}</Header>
        <Image src={img} />
        <div>{content}</div>
      </Container>
    )
  }
}
