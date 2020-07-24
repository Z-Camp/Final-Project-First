import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
<<<<<<< HEAD
import CardGroup from 'react-bootstrap/CardGroup'
import { Row, Col, Container } from "react-bootstrap";
=======
import CardGroup from 'react-bootstrap/CardGroup';
import moment from 'moment';
>>>>>>> cd5998a9a615da0c64e6f0f041491d8a477082ba

const styles = {
    button: {
        backgroundColor: "#a0d080"
    },
    header: {
        backgroundColor: "#bfd72e"
    },
    footer: {
        backgroundColor: "#a0d080"
    },
    card: {
<<<<<<< HEAD
        height: '100%',
    },
    img: {
        padding: '10%',
        height: '100%',
        width: '100%'
=======
        height: "auto"
>>>>>>> cd5998a9a615da0c64e6f0f041491d8a477082ba
    }
}
function FrontPagePosts(props) {
    const formattedDate = moment(props.updated).format('MM/DD/YYYY')
    const goToPost = () => {
        window.location.href = `/post/${props.postId}`
    }
    return (
<<<<<<< HEAD
        <>
        <CardGroup style={styles.cardgroup}>
            <Card style={styles.card} className="text-center card-hover">
                <Card.Header style={styles.header}>{props.title}</Card.Header>
                <Container>
                    <Row>
                    <Col xs lg='3'>
                        <Card.Img style={styles.img} variant="top" src={props.link ?  (props.link) : ('https://via.placeholder.com/150')} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text></Card.Text>
                            <Card.Text>
                                Post Text: {props.postText}
                            </Card.Text>
                            <Button style={styles.button} onClick={goToPost} postID={props.key} variant="primary">Go to Post</Button>
                        </Card.Body>
                    </Col>
                    </Row>
                </Container>
                <Card.Footer style={styles.footer} className="text-muted">Posted By: {props.author}   ||   Comments: {props.commentCount}   ||   Posted: {props.updated}</Card.Footer>
=======
        <CardGroup>
            <Card style={styles.card} className="text-center card-hover">
                <Card.Header style={styles.button}>{props.author}</Card.Header>
                <Card.Body>
                    <Card.Text>Poster: {props.author}</Card.Text>
                    <Card.Text>
                        {props.postText}
                    </Card.Text>
                    <Button style={styles.button} onClick={goToPost} postID={props.key} variant="primary">Go to Post</Button>
                </Card.Body>
                <Card.Footer style={styles.footer} className="text-muted">Comments: {props.commentCount}   ||   Posted: {formattedDate}</Card.Footer>
>>>>>>> cd5998a9a615da0c64e6f0f041491d8a477082ba
            </Card>
        </CardGroup>
        <br />
        </>
    )
}

export default FrontPagePosts;