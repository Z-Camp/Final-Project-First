import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { View, Text } from 'react';

const styles = {
	button: {
		backgroundColor: '#a0d080',
	},
};

function CommentCard(props) {
	return (
		<CardGroup>
			<Card className="text-left">
				<Card.Body>
					<Card.Text>comment author: {props.author} posted: {props.updated}</Card.Text>
                    <Card.Text>comment text: {props.commentText}</Card.Text>
				</Card.Body>
			</Card>
		</CardGroup>
	);
}

export default CommentCard;
