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
                <Card.Header style={styles.button}>{props.author}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.postText}
                    </Card.Text>
                    <Button style={styles.button} postID={props.key} variant="primary">Go to Post</Button>
                </Card.Body>
                <Card.Footer style={styles.button} className="text-muted">{props.updated}</Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default FrontPagePosts;