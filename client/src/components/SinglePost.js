import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import CommentCard from './CommentCard/CommentCard';
import UserInfoContext from '../utils/UserInfoContext';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import CommentForm from './CommentForm'

const styles = {
	button: {
		backgroundColor: '#a0d080',
	},
	headerFooter: {
		backgroundColor: '#bfd72e',
	},
	cardImage: {},
	col: {
		marginTop: "100px"
	},
	body: {
		height: "relative"
	}
};
function SinglePost(props) {
	const { username } = useContext(UserInfoContext);
	const [showModal, setShowModal] = useState(false);

	return (
        <>
		<CardGroup style={styles.col} >
			<Card className="text-center">
				<Card.Header style={styles.headerFooter}>{props.title}</Card.Header>
				<Card.Img style={styles.cardImage} variant="top" src={props.link} cap />
				<Card.Body>
					
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
	);
}

export default SinglePost;
