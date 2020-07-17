import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'

const styles = {
    button: {
      backgroundColor: "#a0d080"
    }
  }
function FrontPagePosts(props) {
    return (
        <CardGroup>
            <Card className="text-center">
                <Card.Header style={styles.button}>User Name{props.author}</Card.Header>
                <Card.Body>
                    <Card.Title>Post Title{props.title}</Card.Title>
                    <Card.Text>
                        First few words from post{props.postText}
                    </Card.Text>
                    <Button style={styles.button} variant="primary">Go to Post</Button>
                </Card.Body>
                <Card.Footer style={styles.button} className="text-muted">2 days ago{props.updated}</Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default FrontPagePosts;