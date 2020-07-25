import React from "react";
import { Row, Col, Container, Button, CardGroup, Card } from "react-bootstrap";
import moment from 'moment';
import logo from '../images/ms-icon-310x310.png'
import { useHistory } from 'react-router-dom'

const styles = {
    button: {
        backgroundColor: "#a0d080"
    },
    header: {
        backgroundColor: "#a0d080",
        color: "white"
    },
    footer: {
        backgroundColor: "#a0d080"
    },
    card: {
        height: '90%',
        marginBottom:'10px'
    },
    img: {
        padding: '5%',
        height: '100%',
        width: '100%'
    }
}
function FrontPagePosts(props) {
    const formattedDate = moment(props.updated).format('MM/DD/YYYY')
    const history = useHistory()
    const goToPost = () => {
        history.push(`/post/${props.postId}`)
    }
    return (
        <>
        <CardGroup style={styles.cardgroup}>
            <Card style={styles.card} className="card-hover">
                <Card.Header className="text-center" style={styles.header}><h2>{props.title}</h2></Card.Header>
                <Container>
                    <Row>
                    <Col xs lg='3'>
                        <Card.Img style={styles.img} variant="top" src={props.link ?  (props.link) : (logo)} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text></Card.Text>
                            <Card.Text className="text-left">
                                {props.postText}
                            </Card.Text>
                            <Button style={styles.button} onClick={goToPost} postID={props.key} variant="primary">Go to Post</Button>
                        </Card.Body>
                    </Col>
                    </Row>
                </Container>
                <Card.Footer style={styles.footer} className="text-center text-muted">Posted By: {props.author}   ||   Comments: {props.commentCount}   ||   Posted: {formattedDate}</Card.Footer>
            </Card>
        </CardGroup>
        {/* <br /> */}
        </>
    )
}

export default FrontPagePosts;