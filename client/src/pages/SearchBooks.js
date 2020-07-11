import React, { useState, useContext } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';
import { saveBook, searchGoogleBooks } from '../utils/API';
import FrontPagePosts from '../components/FrontPage/FrontPagePosts';

function DisplayFrontPage() {


  return (
   <FrontPagePosts></FrontPagePosts>
  );
}

export default DisplayFrontPage;