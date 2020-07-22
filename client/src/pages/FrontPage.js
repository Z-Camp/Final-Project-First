import React, { useState, useContext, useEffect, getSnapshotBeforeUpdate } from 'react';
import { Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';
import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import FrontPagePosts from '../components/FrontPage/FrontPagePosts';
import * as API from '../utils/API';

const styles = {
  col: {
    display: "flex",
    flexDirection: "column-reverse"
  }
}
function FrontPage() {
  const postData = useContext(PostContext);

  return (
    <Container style={styles.col}>
      {postData.AllPosts.map((post)=> {
        return (
         <Row >
           <Col style={styles.col}>
          <FrontPagePosts
            key={post.id}
            author={post.author}
            link={post.link}
            title={post.title}
            postText={post.postText}
            commentCount={post.commentCount}
            postId={post._id}
            updated={post.updated} >
          </FrontPagePosts>
          </Col>
          </Row>



        );
      })}
    </Container>
  )
}

export default FrontPage;