import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "./style.css"
import CardGroup from 'react-bootstrap/CardGroup'

function PostCard(props) {
  return (
    <CardGroup>
    <Card className="text-center">
      <Card.Header>{props.author}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.postText}
    </Card.Text>
        <Button variant="primary">Go to Post</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Updated:{props.updated}</Card.Footer>
    </Card>
    </CardGroup>

  )
}

export default PostCard