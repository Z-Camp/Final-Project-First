import React, { useContext } from 'react';
import { Jumbotron, Container, CardGroup, Card, Button, Row, Col } from 'react-bootstrap';
import PostCard from '../components/PostCard/PostCard'
import UserCard from '../components/UserCard/UserCard'
// import context for global state
import UserInfoContext from '../utils/UserInfoContext';

import * as API from '../utils/API';
import AuthService from '../utils/auth';




function Profile() {
  // get whole userData state object from App.js
  const userData = useContext(UserInfoContext);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeletePost = (postID) => {
    // get token
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;

    if (!token) {
      return false;
    }
    API.deletePost(postID, token)
      // upon succes, update user data to reflect book change
      .then(() => userData.getUserData())
      .catch((err) => console.log(err));
  };

  return (
    <>

      <Container>
        <Row className="justify-content-center">
          <h1>{userData.username}'s Profile</h1>
        </Row>
      </Container>


      <Container>
        <h2>
          {userData.savedPosts.length
            ? `Viewing ${userData.savedPosts.length} saved ${userData.savedPosts.length === 1 ? 'post' : 'posts'}:`
            : 'You have not submitted any Posts!'}
        </h2>
        <Row>
          <Col md={8}>
            <CardGroup>
              {userData.savedPosts.map((post) => {
                return (
                  <PostCard
                    key={post.postID}
                    author={post.author}
                    title={post.title}
                    postText={post.postText}
                    updated={post.updated} >
                  </PostCard>
                );
              })}
            </CardGroup>
          </Col>
          <Col md={4}>
            <UserCard
              username={userData.username}
              avatar={userData.avatar}
              postCount={userData.postCount}
              commentCount={userData.commentCount}
            />
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default Profile;
