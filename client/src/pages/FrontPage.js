import React, { useState, useContext } from 'react';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import FrontPagePosts from '../components/FrontPage/FrontPagePosts';

function FrontPage() {
const postData = useContext(PostContext);

postData.allPosts.map((post)=> {
  return (
   <FrontPagePosts
      key={post.postId}
      author={post.author}
      title={post.title}
      postText={post.postText}
      updated={post.updated}
   ></FrontPagePosts>
  );})

}

export default FrontPage;