import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "./style.css"
import CardGroup from 'react-bootstrap/CardGroup'

function PostCard(props) {
  return (
    <CardGroup>
    <Card className="text-center">
      <Card.Header>User Name{props.author}</Card.Header>
      <Card.Body>
        <Card.Title>Post Title{props.title}</Card.Title>
        <Card.Text>
          First few words from post
    </Card.Text>
        <Button variant="primary">Go to Post</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago{props.updated}</Card.Footer>
    </Card>
    <Card className="text-center">
      <Card.Header>User Name{props.author}</Card.Header>
      <Card.Body>
        <Card.Title>Post Title{props.title}</Card.Title>
        <Card.Text>
          First few words from post
    </Card.Text>
        <Button variant="primary">Go to Post</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago{props.updated}</Card.Footer>
    </Card>
    <Card className="text-center">
      <Card.Header>User Name{props.author}</Card.Header>
      <Card.Body>
        <Card.Title>Post Title{props.title}</Card.Title>
        <Card.Text>
          First few words from post
    </Card.Text>
        <Button variant="primary">Go to Post</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago{props.updated}</Card.Footer>
    </Card>
    <Card className="text-center">
      <Card.Header>User Name{props.author}</Card.Header>
      <Card.Body>
        <Card.Title>Post Title{props.title}</Card.Title>
        <Card.Text>
          First few words from post
    </Card.Text>
        <Button variant="primary">Go to Post</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago{props.updated}</Card.Footer>
    </Card>
    </CardGroup>

  )
}

export default PostCard