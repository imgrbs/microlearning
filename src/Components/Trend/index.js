import React, { Component } from "react"
import { Header, Grid } from "semantic-ui-react"
import firebase from "../../Tools/firebase"

import Feed from "../Feed"
class Trend extends Component {
  state = {
    news: []
  }

  componentDidMount () {
    this.loadNews()
  }

  async loadNews () {
    try {
      const rawNews = await firebase
        .database()
        .ref("news")
        .orderByChild("createdAt")
        .limitToLast(3)
        .once("value")
      const listNews = Object.values(rawNews.val())
      listNews.reverse()
      this.setState({ news: listNews })
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as='h1'>{this.props.title}</Header>
            {this.state.news.map(news => <Feed {...news} />)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Trend
