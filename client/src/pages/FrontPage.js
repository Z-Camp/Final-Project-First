import React, { useState, useContext, useEffect, getSnapshotBeforeUpdate } from 'react';
import { Container, Col, Form, Button, Card, CardColumns, Row } from 'react-bootstrap';
import PostContext from '../utils/PostContext';
import AuthService from '../utils/auth';
import FrontPagePosts from '../components/FrontPage/FrontPagePosts';
import * as API from '../utils/API';
import CategoriesCard from "../components/Categories/CategoriesCard"
import Ads from "../components/AdsCard/AdsCard"
import Chuck from "../components/ChuckNorris2020/Chuck"
import AboutCard from '../components/AboutCard/AboutCard';


const styles = {
  col: {
    display: "flex",
    flexDirection: "column-reverse",
   
  },
  col1: {
    marginTop: "100px"
  }
 

}
function FrontPage() {
  const postData = useContext(PostContext);

  return (

 
    <Container style={styles.col1}>
      <Row>
        <Col xs={12} sm={12} md={9} style={styles.col}>
      {postData.AllPosts.map((post)=> {
        return (
         
         
          <FrontPagePosts
            key={post._id}
            author={post.author}
            title={post.title}
            postText={post.postText}
            updated={post.updated} >
          </FrontPagePosts>
      

         );
      })}
      </Col>
      <Col xs={12} sm={12} md={3}>
        <Row>
        <CategoriesCard />
        </Row>
        <Row>
          <Ads />
        </Row>
        <Row>
        
        </Row>
        <Row>
          <Chuck />
        </Row>
        <Row>
          <AboutCard />
        </Row>
      </Col>
       </Row>
       
      
      </Container>
    
   
   
  
  )
}

export default FrontPage;