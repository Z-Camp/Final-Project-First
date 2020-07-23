import React, { useState, useContext, useEffect } from 'react';
import {Container,Col,Form,Button,Card,CardColumns,Row,} from 'react-bootstrap';
import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import SinglePost from '../components/SinglePost';
import * as API from '../utils/API';

const styles = {
	col: {
		display: 'flex',
		flexDirection: 'column-reverse',
	},
};
function SinglePostPage() {
	const postData = useContext(PostContext);
    let displayPostId = window.location.href.split("/")[4];

	return (
		<Container style={styles.col}>
			{postData.AllPosts.filter((post) => post.id === displayPostId).map(
				(post) => {
					return (
						<Row>
							<Col style={styles.col}>
								<SinglePost
									key={post._id}
									author={post.author}
									title={post.title}
									postText={post.postText}
                                    commentCount={post.commentCount}
                                    savedComments={post.savedComments}
									updated={post.updated}
								></SinglePost>
							</Col>
						</Row>
					);
				}
			)}
		</Container>
	);
}

export default SinglePostPage;
