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
<<<<<<< HEAD
                <Card.Header style={styles.button}>User Name{props.author}</Card.Header>
=======
                <Card.Header style={styles.button}>{props.author}</Card.Header>
>>>>>>> 9050eb0f941cc3fc2dd9181807f66d63637b4bed
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.postText}
                    </Card.Text>
                    <Button style={styles.button} postID={props.key} variant="primary">Go to Post</Button>
                </Card.Body>
<<<<<<< HEAD
                <Card.Footer style={styles.button} className="text-muted">2 days ago{props.updated}</Card.Footer>
=======
                <Card.Footer style={styles.button} className="text-muted">{props.updated}</Card.Footer>
>>>>>>> 9050eb0f941cc3fc2dd9181807f66d63637b4bed
            </Card>
        </CardGroup>
    )
}

export default FrontPagePosts;