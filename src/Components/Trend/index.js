import React, { Component } from "react"
import styled from "styled-components"
import { Header, Grid, Dimmer as DefaultDimmer, Loader } from "semantic-ui-react"
import firebase from "../../Tools/firebase"

import Feed from "../Feed"
import "./main.css"

const Dimmer = styled(DefaultDimmer)`
  min-height: 100px;
  margin-top: 100px;
`

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
      const listNews = Object.entries(rawNews.val()).map(entity => ({
        ...entity[1],
        newsId: entity[0]
      }))
      listNews.reverse()
      this.setState({ news: listNews })
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    const { news } = this.state
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as='h1'>{this.props.title}</Header>
            <hr />
            {news && !(news.length > 0) ? (
              <Dimmer inverted active>
                <Loader>Loading</Loader>
              </Dimmer>
            ) : (
              news.map(news => <Feed {...news} />)
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Trend
