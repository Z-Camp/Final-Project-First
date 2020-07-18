import React, { useState, useContext, useEffect, getSnapshotBeforeUpdate } from 'react';
import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import FrontPagePosts from '../components/FrontPage/FrontPagePosts';
import * as API from '../utils/API';

function FrontPage() {
const postData = useContext(PostContext);

  return (
    <Container>
      {postData.AllPosts.reverse().map((post)=> {
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
}

export default FrontPage;