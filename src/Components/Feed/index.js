import React from "react"
import { Feed, Icon, Grid } from "semantic-ui-react"

const NewFeed = () => (
  <Grid centered>
    <Feed size='small'>
      <Feed.Event>
        <Feed.Label>
          <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> added you as a friend
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              4 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
        <Feed.Content>
          <Feed.Summary>
            <a>Helen Troy</a> added <a>2 new illustrations</a>
            <Feed.Date>4 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra images>
            <a>
              <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </a>
            <a>
              <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </a>
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              1 Like
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label>
          <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> added you as a friend
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              4 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label>
          <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> added you as a friend
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              4 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  </Grid>
)

export default NewFeed
