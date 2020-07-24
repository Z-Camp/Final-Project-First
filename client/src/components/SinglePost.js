import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import CommentCard from './CommentCard/CommentCard';
import UserInfoContext from '../utils/UserInfoContext';
import { Navbar, Nav, Container, Modal, Tab, Row, Col } from 'react-bootstrap';
import CommentForm from './CommentForm';

const styles = {
	button: {
<<<<<<< HEAD
        backgroundColor: "#a0d080"
    },
    header: {
        backgroundColor: "#bfd72e"
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
=======
		backgroundColor: '#a0d080',
	},
	headerFooter: {
		backgroundColor: '#bfd72e',
	},
	cardImage: {},
	col: {
		marginTop: "100px"
	}
>>>>>>> cd5998a9a615da0c64e6f0f041491d8a477082ba
};
function SinglePost(props) {
	const { username } = useContext(UserInfoContext);
	const [showModal, setShowModal] = useState(false);

	return (
<<<<<<< HEAD
		<>
			<CardGroup>
				<Card style={styles.card} className="text-center">
					<Card.Header style={styles.header}>{props.title}</Card.Header>
					<Container>
						<Row>
							<Col xs lg="3">
								<Card.Img
									style={styles.img}
									variant="top"
									src={
										props.link ? props.link : 'https://via.placeholder.com/150'
									}
								/>
							</Col>
							<Col>
								<Card.Body>
									<Card.Text></Card.Text>
									<Card.Text>Post Text: {props.postText}</Card.Text>
									{username ? (
										<Button
											onClick={() => setShowModal(true)}
											style={styles.button}
											variant="primary"
										>
											Add a Comment
										</Button>
									) : (
										<Button style={styles.button} href="/" variant="primary">
											Return to Main Feed
										</Button>
									)}{' '}
								</Card.Body>
							</Col>
						</Row>
					</Container>
					<Card.Footer style={styles.footer} className="text-muted">
						Posted By: {props.author} || Comments: {props.commentCount} ||
						Posted: {props.updated}
					</Card.Footer>
					{props.savedComments.map((comment) => {
						return (
							<CommentCard
								auhor={comment.author}
								authorID={comment.authorID}
								commentText={comment.commentText}
								updated={comment.updated}
							></CommentCard>
						);
					})}
				</Card>
			</CardGroup>
			<Modal
				size="lg"
				show={showModal}
				onHide={() => setShowModal(false)}
				aria-labelledby="comment"
			>
				{/* tab container to do either signup or login component */}
				<Tab.Container defaultActiveKey="comment">
					<Modal.Header closeButton>
						<Modal.Title id="comment"></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Tab.Content>
							<Tab.Pane eventKey="comment">
								<CommentForm handleModalClose={() => setShowModal(false)} />
							</Tab.Pane>
						</Tab.Content>
					</Modal.Body>
				</Tab.Container>
			</Modal>
		</>
=======
        <>
		<CardGroup style={styles.col} >
			<Card className="text-center">
				<Card.Header style={styles.headerFooter}>{props.title}</Card.Header>
				<Card.Img style={styles.cardImage} variant="top" src={props.link} cap />
				<Card.Body>
					<Card.Text>Poster: {props.author}</Card.Text>
					<Card.Text>Text: {props.postText}</Card.Text>
				</Card.Body>
				{username ? (
					<Button onClick={() => setShowModal(true)} style={styles.button} variant="primary">
						Add a Comment
					</Button>
				) : (
					<Button style={styles.button} href="/" variant="primary">
						Return to Main Feed
					</Button>
				)}
				<Card.Footer style={styles.headerFooter} className="text-muted">
					Comments: {props.commentCount} || Posted: {props.updated}
				</Card.Footer>
				{props.savedComments.map((comment) => {
					return (
						<CommentCard
							auhor={comment.author}
							authorID={comment.authorID}
							commentText={comment.commentText}
							updated={comment.updated}
						></CommentCard>
					);
				})}
			</Card>
		</CardGroup>
        <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} aria-labelledby='comment'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='comment'>
          <Modal.Header closeButton>
            <Modal.Title id='comment'>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='comment'>
                <CommentForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      </>
>>>>>>> cd5998a9a615da0c64e6f0f041491d8a477082ba
	);
}

export default SinglePost;
