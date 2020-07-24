import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "./style.css"
import CardGroup from 'react-bootstrap/CardGroup'
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';


const styles = {
  button: {
      backgroundColor: "#a0d080"
  },
  header: {
      backgroundColor: "#a0d080"
  },
  footer: {
      backgroundColor: "#a0d080"
  },
  card: {
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
  const formattedDate = moment(props.updated).format('MM/DD/YYYY')
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
					Posted By: {props.author} || Comments: {props.commentCount} || Posted:{formattedDate}
				</Card.Footer>
			</Card>
		</CardGroup>
	);
}

export default PostCard;
