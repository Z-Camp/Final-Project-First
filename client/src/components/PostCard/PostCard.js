import React from 'react';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import './style.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { Row, Col, Container } from "react-bootstrap";
import { View, Text } from 'react';
=======
import Button from 'react-bootstrap/Button'
import "./style.css"
import CardGroup from 'react-bootstrap/CardGroup'
import { View, Text } from "react";
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
  }
}
function PostCard(props) {
	const goToPost = () => {
		window.location.href = `/post/${props.postId}`;
	};
	return (
		<CardGroup style={styles.cardgroup}>
			<Card style={styles.card} className="text-center card-hover">
				<Card.Header style={styles.header}>{props.title}</Card.Header>
				<Container>
					<Row>
							<Card.Img
								style={styles.img}
								variant="top"
								src={
									props.link ? props.link : 'https://via.placeholder.com/150'
								}
							/>
            </Row>
            <Row>
						<Col>
							<Card.Body>
								<Card.Text></Card.Text>
								<Card.Text>Post Text: {props.postText}</Card.Text>
								<Button
									style={styles.button}
									onClick={goToPost}
									postID={props.key}
									variant="primary"
								>
									Go to Post
								</Button>
							</Card.Body>
						</Col>
					</Row>
				</Container>
				<Card.Footer style={styles.footer} className="text-muted">
					Posted By: {props.author} || Comments: {props.commentCount} || Posted:{' '}
					{props.updated}
				</Card.Footer>
			</Card>
		</CardGroup>
	);
=======
    height: "325px",
    width: "325px"
  }
  // text: {
  //   overflow: "hidden",
  //   height: "5em",
  //   padding: "5px"
  // }
}
function PostCard(props) {
  const formattedDate = moment(props.updated).format('MM/DD/YYYY')
  return (
    <CardGroup style={styles.card}>
      <Card style={styles.card} className="text-center card-hover" id="postCard">
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
>>>>>>> cd5998a9a615da0c64e6f0f041491d8a477082ba
}

export default PostCard;
