import React, { useContext } from 'react';
import { Jumbotron, Container, CardGroup, Card, Button, Row, Col } from 'react-bootstrap';
import PostCard from '../components/PostCard/PostCard'
import UserCard from '../components/UserCard/UserCard'
// import context for global state
import UserInfoContext from '../utils/UserInfoContext';

import * as API from '../utils/API';
import AuthService from '../utils/auth';




function SavedBooks() {
  // get whole userData state object from App.js
  const userData = useContext(UserInfoContext);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeletePost = (bookId) => {
    // get token
    const token = AuthService.loggedIn() ? AuthService.getToken() : null;

    if (!token) {
      return false;
    }
    API.deleteBook(bookId, token)
      // upon succes, update user data to reflect book change
      .then(() => userData.getUserData())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>{userData.username}'s Profile</h1>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {userData.savedPosts.length
            ? `Viewing ${userData.savedPosts.length} saved ${userData.savedPosts.length === 1 ? 'post' : 'posts'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          <Col md={8}>
            <CardGroup>
              {userData.savedPosts.map((post) => {
                return (
                  // <Card key={post.postId} border='dark'>
                  //   {post.image ? <Card.Img src={post.image} alt={`The cover for ${post.title}`} variant='top' /> : null}
                  //   <Card.Body>
                  //     <Card.Title>{post.title}</Card.Title>
                  //     <p className='small'>Authors: {post.author}</p>
                  //     <Card.Text>{post.postText}</Card.Text>
                  //     <Button className='btn-block btn-danger' onClick={() => handleDeletePost(post.postId)}>
                  //       Delete this Post!
                  //     </Button>
                  //   </Card.Body>
                  // </Card>
                  <PostCard
                    key={post.postId}
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
            <UserCard />
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default SavedBooks;
