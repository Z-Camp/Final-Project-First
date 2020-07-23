import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "./style.css"
import CardGroup from 'react-bootstrap/CardGroup'
import { View, Text } from "react";
import moment from 'moment';

const styles = {
  button: {
    backgroundColor: "#a0d080",

  },
  // text: {
  //   overflow: "hidden",
  //   height: "5em",
  //   padding: "5px"
  // }
}
function PostCard(props) {
  const formattedDate = moment(props.updated).format('MM/DD/YYYY')
  return (
    <CardGroup>
      <Card className="text-center card-hover" id="postCard">
        <Card.Header style={styles.button}>{props.author}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.postText}</Card.Text>
          <Button style={styles.button} variant="primary">Go to Post</Button>
        </Card.Body>
        <Card.Footer style={styles.button} className="text-muted">Updated: {formattedDate}</Card.Footer>
      </Card>
    </CardGroup>

  )
}

export default PostCard