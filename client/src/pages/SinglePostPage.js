import React, { useState, useContext, useEffect } from 'react';
import {
	Container,
	Col,
	Form,
	Button,
	Card,
	CardColumns,
	Row,
} from 'react-bootstrap';
import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import SinglePost from '../components/SinglePost';
import CategoriesCard from "../components/Categories/CategoriesCard"
import Ads from "../components/AdsCard/AdsCard"
import Chuck from "../components/ChuckNorris2020/Chuck"
import AboutCard from '../components/AboutCard/AboutCard';


const styles = {
	col: {
		display: 'flex',
		flexDirection: 'column-reverse',
	},
	col1: {
		marginTop: "30px"
	  }
};
function SinglePostPage() {
	const postData = useContext(PostContext);
	let displayPostId = window.location.href.split('/')[4];

	return (
		<Container style={styles.col1}>
			<Row className='d-flex align-items-start'>
				<Col xs={12} sm={12} md={9} style={styles.col} >
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
				</Col>
				<Col xs={12} sm={12} md={3}>
					<Row>
						<CategoriesCard />
					</Row>
					<Row>
						<Ads />
					</Row>
					<Row></Row>
					<Row>
						<Chuck />
					</Row>
					<Row>
						<AboutCard />
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default SinglePostPage;
