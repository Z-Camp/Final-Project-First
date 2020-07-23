import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup';
import moment from 'moment';

const styles = {
    button: {
        backgroundColor: "#a0d080"
    },
    header: {
        backgroundColor: "#bfd72e"
    },
    footer: {
        backgroundColor: "#a0d080"
    }

}
function FrontPagePosts(props) {
<<<<<<< HEAD
    const formattedDate = moment(props.updated).format('MM/DD/YYYY')
=======
    const goToPost = () => {
        window.location.href=`/post/${props.postId}`
    }
>>>>>>> 71632ee85d5961b1c51041522dcf68db1c54e1ef
    return (
        <CardGroup>
            <Card className="text-center">
                <Card.Header style={styles.header}>{props.title}</Card.Header>
                <Card.Img src={props.link}cap  />
                <Card.Body>
                    <Card.Text>Poster: {props.author}</Card.Text>
                    <Card.Text>
                        {props.postText}
                    </Card.Text>
                    <Button style={styles.button} onClick={goToPost} postID={props.key} variant="primary">Go to Post</Button>
                </Card.Body>
<<<<<<< HEAD
                <Card.Footer style={styles.button} className="text-muted">Updated: {formattedDate}</Card.Footer>
=======
                <Card.Footer style={styles.footer} className="text-muted">Comments: {props.commentCount}   ||   Posted: {props.updated}</Card.Footer>
>>>>>>> 71632ee85d5961b1c51041522dcf68db1c54e1ef
            </Card>
        </CardGroup>
    )
}

export default FrontPagePosts;