import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import UserInfoContext from '../utils/UserInfoContext';
import { savePost } from '../utils/API';
import AuthService from '../utils/auth';

function PostForm({ handleModalClose }) {
  // set initial form state
  const [postFormData, setPostFormData] = useState({image: '', link: '', title: '', postText: ''});
  // set state for form validation
  const [validated] = useState(true);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [errorText, setErrorText] = useState('');

  // get context object from app.js
  const userData = useContext(UserInfoContext)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostFormData({ ...postFormData, [name]: value });
  };

  const handleFormSubmit = (e) => {
     e.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    // send new user data to server, receiving the JWT and user data in return
    savePost(postFormData, AuthService.getToken())
      .then(({ data: { post, user } }) => {
        handleModalClose();
      })
      .catch((err) => {
        console.log(err.response);
        setShowAlert(true);
        setErrorText(err.response.data.message);
      });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          {errorText || 'Something went wrong while submitting your post!'}
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='Title'>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Post Titile'
            name='title'
            onChange={handleInputChange}
            value={postFormData.title}
            required
          />
          <Form.Control.Feedback type='invalid'>Title is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='link'>Link(Optional)</Form.Label>
          <Form.Control
            type='text'
            placeholder='Add a link to your Post'
            name='link'
            onChange={handleInputChange}
            value={postFormData.link}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='postText'>Post Text</Form.Label>
          <Form.Control
            type='text'
            placeholder='(500 chars max)'
            name='postText'
            onChange={handleInputChange}
            value={postFormData.postText}
            required
          />
          <Form.Control.Feedback type='invalid'>Post text is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(postFormData.title && postFormData.postText)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default PostForm;
