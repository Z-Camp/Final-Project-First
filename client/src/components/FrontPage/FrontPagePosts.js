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
    const formattedDate = moment(props.updated).format('MM/DD/YYYY')
    const goToPost = () => {
        window.location.href = `/post/${props.postId}`
    }
    return (
        <CardGroup>
<<<<<<< HEAD
            <Card className="text-center">
                <Card.Header style={styles.header}>{props.title}</Card.Header>
                <Card.Img src={props.link} cap />
=======
            <Card className="text-center card-hover">
                <Card.Header style={styles.button}>{props.author}</Card.Header>
>>>>>>> 83619a13833acf35121cbb11a39be2874a2aa33d
                <Card.Body>
                    <Card.Text>Poster: {props.author}</Card.Text>
                    <Card.Text>
                        {props.postText}
                    </Card.Text>
                    <Button style={styles.button} onClick={goToPost} postID={props.key} variant="primary">Go to Post</Button>
                </Card.Body>
                <Card.Footer style={styles.footer} className="text-muted">Comments: {props.commentCount}   ||   Posted: {formattedDate}</Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default FrontPagePosts;