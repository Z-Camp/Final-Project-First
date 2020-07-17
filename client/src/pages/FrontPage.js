import React, { useState, useContext, useEffect, getSnapshotBeforeUpdate } from 'react';
import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import FrontPagePosts from '../components/FrontPage/FrontPagePosts';
import * as API from '../utils/API';

function FrontPage() {
  const postData = useContext(PostContext);

<<<<<<< HEAD
  postData.allPosts.map((post) => {
    return (
      <FrontPagePosts
        key={post.postId}
        author={post.author}
        title={post.title}
        postText={post.postText}
        updated={post.updated}
      ></FrontPagePosts>
    );
  })

=======
  return (
    <Container>
      {postData.AllPosts.map((post)=> {
        return (
          <FrontPagePosts
            key={post._Id}
            author={post.author}
            title={post.title}
            postText={post.postText}
            updated={post.updated} >
          </FrontPagePosts>
        );
      })}
    </Container>
  )
>>>>>>> 9050eb0f941cc3fc2dd9181807f66d63637b4bed
}

export default FrontPage;