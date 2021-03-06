import React, { useState, useContext } from 'react';
import { Form, Button, Alert, Image } from 'react-bootstrap';

import UserInfoContext from '../utils/UserInfoContext';
import { createUser } from '../utils/API';
import AuthService from '../utils/auth';
import BlueIcon from './userIcons/blue.png';
import PurpleIcon from './userIcons/purple.png';
import CharcoalIcon from './userIcons/charcoal.png';
import OrangeIcon from './userIcons/orange.png';
import PinkIcon from './userIcons/pink.png';
import RedIcon from './userIcons/red.png';
import SmokeIcon from './userIcons/smoke.png';
import YellowIcon from './userIcons/yellow.png';

const styles = {
  button: {
    backgroundColor: "#a0d080"
  }
}


function SignupForm({ handleModalClose }) {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', avatar: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [errorText, setErrorText] = useState('');

  // get context object from app.js
  const userData = useContext(UserInfoContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
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
    createUser(userFormData)
      .then(({ data: { token, user } }) => {
        // set token to localstorage
        AuthService.login(token);
        // execute function from context api in app.js to update state for logged in user
        userData.getUserData();
        // close modal
        handleModalClose();
      })
      .catch((err) => {
        console.log(err.response);
        setShowAlert(true);
        setErrorText(err.response.data.message);
      });
  };

  const imgSize = {
    height: "100px",
    width: "90px",
    padding: "5px",

  };

  const userPicked = e => {
    setUserFormData({ ...userFormData, avatar: e.target.id });
    e.target.className = "border border-dark";
    console.log(e.target.id)
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          {errorText || 'Something went wrong with your signup!'}
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="iconCheckbox" name="iconSelector">
          <text>Choose your avatar:</text>
        </Form.Group>
        <div className="iconSet">
          <Image
            onClick={e => userPicked(e)}
            id="purple"
            src={PurpleIcon}
            alt="purple"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

          <Image
            onClick={e => userPicked(e)}
            id="pink"
            src={PinkIcon}
            alt="pink"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

          <Image
            onClick={e => userPicked(e)}
            id="yellow"
            src={YellowIcon}
            alt="yellow"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

          <Image
            onClick={e => userPicked(e)}
            id="orange"
            src={OrangeIcon}
            alt="orange"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

          <Image
            onClick={e => userPicked(e)}
            id="charcoal"
            src={CharcoalIcon}
            alt="charcoal"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

          <Image
            onClick={e => userPicked(e)}
            id="smoke"
            src={SmokeIcon}
            alt="smoke"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

          <Image
            onClick={e => userPicked(e)}
            id="red"
            src={RedIcon}
            alt="red"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

          <Image
            onClick={e => userPicked(e)}
            id="blue"
            src={BlueIcon}
            alt="blue"
            style={imgSize}
            value={userFormData.avatar}
            className=''
             />

        </div>
        <Button
          style={styles.button}
          disabled={!(userFormData.username && userFormData.email && userFormData.password && userFormData.avatar)}
          type='submit'
          variant='success'>
          Submit

        </Button>
      </Form>
    </>
  );
}

export default SignupForm;
