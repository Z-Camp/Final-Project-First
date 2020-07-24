import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import CardGroup from 'react-bootstrap/CardGroup';
import moment from 'moment';


function CommentCard(props) {
	const formattedDate = moment(props.updated).format('MM/DD/YYYY')

	return (
		<CardGroup>
			<Card className="text-left">
				<Card.Body>
					<Card.Text>comment author: {props.author} posted: {formattedDate}</Card.Text>
					<Card.Text>comment text: {props.commentText}</Card.Text>
				</Card.Body>
			</Card>
		</CardGroup>
	);
}

export default CommentCard;
